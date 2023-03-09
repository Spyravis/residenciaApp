
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role_user, User_has_booking, Calendar_booking , Message as InternalMessages
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import cloudinary
import cloudinary.uploader

api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def user_login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user = User.query.filter_by(email= body_email, password=body_password).first()
    if not user:
        return jsonify({"Error": "Invalid credentials"}), 401
    token = create_access_token(identity=user.id)

    return jsonify({"response": "Hola", "token": token}), 200

@api.route('/register', methods=['POST'])
def user_register():
    body_name = request.json.get("name")
    body_surname = request.json.get("surname")
    body_photo = request.json.get("photo")
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_phone = request.json.get("phone")
    user_already_exist = User.query.filter_by(email= body_email).first()
    if user_already_exist:
        return jsonify({"response": "Email already used"}), 300
    new_user = User (name=body_name, surname=body_surname, photo=body_photo ,email=body_email, password=body_password, phone=body_phone, role_user_id=1)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"response": "User registered successfully"}), 200 


@api.route('/user', methods=['GET'])
@jwt_required()
def current_user():
    user_id = get_jwt_identity()
    #user = User.query.get(user_id)
    user = User.query.filter_by(id = user_id)
    return jsonify({"response": x.serialize() for x in user}), 200

#Mensajes por usuario
@api.route('/messages', methods=['GET'])
@jwt_required()
def get_messages():
    user_id = get_jwt_identity()    
    messages_by_user = InternalMessages.query.filter_by(user_id = user_id)
    messages_serialized = [x.serialize() for x in messages_by_user]
    print(messages_serialized)
    return jsonify({"response" : messages_serialized}), 200

#Mensajes por residente
@api.route('/residentmessages', methods=['GET'])
@jwt_required()
def get_resident_messages():
    user_id = get_jwt_identity()
    userdata = User.query.filter_by(id = user_id)
    userdata_serialized = [x.serialize() for x in userdata]    
    messages_serialized = []
    for i in (userdata_serialized[0]["residents"]):
        messages_by_resident = InternalMessages.query.filter_by(resident_id = i["id"])
        messages_serialized.extend([x.serialize() for x in messages_by_resident])
    ordenados = sorted(messages_serialized, key=lambda k: k["id"], reverse = True)
    print(ordenados)
    return jsonify({"response" : ordenados}), 200

@api.route('/messages/send', methods=['POST'])
def new_message():
    user_id = request.json.get("user_id")
    subject = request.json.get("subject")
    message = request.json.get("message")
    url_attached = request.json.get("url_attached")
    resident_id = request.json.get("resident_id")
    db.session.add(InternalMessages (user_id=user_id, subject=subject, message=message, url_attached=url_attached,resident_id=resident_id ))
    db.session.commit()
    return jsonify({"response": "Message sent successfully"}), 200

@api.route('/messages/readed/<id>', methods=['POST'])
def readed_message(id):
    message =  InternalMessages.query.get(id)
    message.readed = True
    db.session.commit()
    return jsonify({"response": "Message readed"}), 200

@api.route('/messages/unreaded', methods=['GET'])
@jwt_required()
def unreaded_messages():
    user_id = get_jwt_identity()
    userdata = User.query.filter_by(id = user_id)
    userdata_serialized = [x.serialize() for x in userdata]        
    unreaded = 0
    for i in (userdata_serialized[0]["residents"]):
        messages_serialized = []
        messages_by_resident = InternalMessages.query.filter_by(resident_id = i["id"])
        messages_serialized.extend([x.serialize() for x in messages_by_resident])
        for m in (messages_serialized):           
            if m["user_id"] != user_id and m["readed"] == False:
                unreaded +=1
    return jsonify({"response" : unreaded}), 200
   

@api.route('/messages/delete/<id>', methods=['DELETE'])
def delete_message(id):
    message =  InternalMessages.query.get(id)
    db.session.delete(message)
    print(message)
    db.session.commit()
    return jsonify({"response": "Message deleted successfully"}), 200  

@api.route('/schuddle', methods=['POST'])
@jwt_required()
def current_schuddle():
    user_id = get_jwt_identity()
    is_online = request.json.get("is_online")
    url = request.json.get("url")    
    resident_id = request.json.get("resident")    
    booking = request.json.get("booking")
    new_booking = User_has_booking (is_online=is_online,url=url,resident_id=resident_id,user_id=user_id,booking=booking)
    db.session.add(new_booking)
    db.session.commit()    
    return jsonify({"response": "Booking created succesfully"}), 200

@api.route('/bookings_availability', methods=['GET','POST'])
@jwt_required()
def bookings_availability():
    user_id = get_jwt_identity()
    booking = request.json.get("booking")
    bookings = User_has_booking.query.filter_by(booking=booking)
    if bookings.count() < 5:
        return jsonify({"response":  "Cita disponible"}), 200
    else:
        return jsonify({"response":  "No hay citas disponibles, seleccione otra fecha"}), 300
            
@api.route("/profile", methods=["PUT"])
@jwt_required()
def change_user_data():
    user_id = get_jwt_identity()
    #update_photo = request.json["photo"]
    update_email = request.json["email"]
    update_phone = request.json["phone"]
    if not (update_email and update_phone): #and update_photo):
        return jsonify({"error": "Invalid"}), 400
    user = User.query.get(user_id)
    #user.photo = update_photo
    user.email = update_email
    user.phone = update_phone
    db.session.commit()
    return jsonify({"response": "profile changed successfully"}), 200


@api.route("/update_password", methods=["PUT"])
@jwt_required()
def update_password():
    user_id = get_jwt_identity()
    update_password = request.json["newPassword"]
    current_password = request.json["password"]
    if not (update_password):
        return jsonify({"error": "Invalid"}), 400
    user = User.query.get(user_id)
    if user.password == current_password:
        user.password = update_password
        db.session.commit()
        return jsonify({"msg": "password changed successfully"}), 200
    else:
        return jsonify({"error": "current password invalid "}), 400



# ENVIO DE EMAILS : pip install maichimp mailchimp_transactional https://mailchimp.com/developer/transactional/guides/send-first-email/

import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError

@api.route("/send_email", methods=['POST'])
def sending_email():
    subject = request.json.get("subject")
    message_text = request.json.get("message") 

    mailchimp = MailchimpTransactional.Client('md-54oVbrJrZJhIphFY1kJ-vw')
    message = {
        "from_email": "residenciaapp@abeceweb.com",
        "subject": subject,
        "text": message_text,
        "to": [
        {
            "email": "rita@abeceweb.com",
            "type": "to"
        }
        ]
    }
    try:
        response = mailchimp.messages.send({"message":message})
        print('API called successfully: {}'.format(response))
        return jsonify({"response": "Email sent successfully"}), 200
    except ApiClientError as error:
        print('An exception occurred: {}'.format(error.text))
        return jsonify({"response": "Email sent error"}), 405

@api.route('/upload', methods=['POST'])
@jwt_required()
def handle_upload():
    user_id = get_jwt_identity()
    # validate that the front-end request was built correctly
    if 'profile_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_image'])
        # fetch for the user
        user1 = User.query.get(user_id)
        # update the user with the given cloudinary image URL
        user1.photo= result['secure_url']

        db.session.add(user1)
        db.session.commit()

        return jsonify(user1.serialize()) #, 200, "msg: profile photo update successfully")   #user1.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')

