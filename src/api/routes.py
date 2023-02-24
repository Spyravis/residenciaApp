"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Message
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

@api.route('/user', methods=['GET'])
@jwt_required()
def current_user():
    user_id = get_jwt_identity()
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