
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role_user, User_has_booking, Calendar_booking , Message
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
    messages_by_user = Message.query.filter_by(user_id = user_id)
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
        messages_by_resident = Message.query.filter_by(resident_id = i["id"])
        messages_serialized.extend([x.serialize() for x in messages_by_resident])
    print(messages_serialized)
    return jsonify({"response" : messages_serialized}), 200

@api.route('/messages/send', methods=['POST'])
def new_message():
    user_id = request.json.get("user_id")
    subject = request.json.get("subject")
    message = request.json.get("message")
    url_attached = request.json.get("url_attached")
    resident_id = request.json.get("resident_id")
    db.session.add(Message (user_id=user_id, subject=subject, message=message, url_attached=url_attached,resident_id=resident_id ))
    db.session.commit()
    return jsonify({"response": "Message sent successfully"}), 200

@api.route('/messages/delete/<id>', methods=['DELETE'])
def delete_message(id):
    message =  Message.query.get(id)
    db.session.delete(message)
    print(message)
    db.session.commit()
    return jsonify({"response": "Message deleted successfully"}), 200  

@api.route('/schuddle', methods=['GET'])
@jwt_required()
def current_schuddle():
    user_id = get_jwt_identity()
    user_schuddle = Calendar_booking.query.filter_by(user_id=user_id)
    schuddle_serialized = [x.serialize() for x in user_schuddle]
    return jsonify({"response": schuddle_serialized}), 200

    

@api.route("/profile", methods=["PUT"])
@jwt_required()
def change_user_data():
    user_id = get_jwt_identity()
    update_photo = request.json["photo"]
    update_email = request.json["email"]
    update_phone = request.json["phone"]
    if not (update_email and update_phone and update_photo):
        return jsonify({"error": "Invalid"}), 400
    user = User.query.get(user_id)
    user.photo = update_photo
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

