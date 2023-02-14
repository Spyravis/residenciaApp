
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role_user
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
    user = User.query.get(user_id)
    return jsonify({"response": user.serialize(), "email": user.email}), 200

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

    return jsonify({"msg": "profile changed successfully"}), 200


@api.route("/update_password", methods=["PUT"])
@jwt_required()
def update_password():
    user_id = get_jwt_identity()
    update_password = request.json["newPassword"]
    actual_password = request.json["password"]


    if not (update_password):
        return jsonify({"error": "Invalid"}), 400

    user = User.query.get(user_id)

    user.password = update_password

    db.session.commit()

    return jsonify({"msg": "password changed successfully"}), 200
