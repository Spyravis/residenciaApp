
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role_user, User_has_booking, Calendar_booking 
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
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    body_phone = request.json.get("phone")
    user_already_exist = User.query.filter_by(email= body_email).first()
    if user_already_exist:
        return jsonify({"response": "Email already used"}), 300
    new_user = User (name=body_name, surname=body_surname, email=body_email, password=body_password, phone=body_phone, role_user_id=1)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"response": "User registered successfully"}), 200 


@api.route('/user', methods=['GET'])
@jwt_required()
def current_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id)
    return jsonify({"response": x.serialize() for x in user}), 200


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
            

    