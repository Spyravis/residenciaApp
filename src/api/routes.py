"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

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
def current_user_email():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"response": "Hola", "email": user.email}), 200

    #Crear ruta para reporte nocturo
@api.route('/parte/<int:id>', methods=['GET'])
@jwt_required()
def parte():
   user_id = get_jwt_identity()
   #acceder, mediante la relacion entre tablas, al paciente que esta relacionado al ID del usuario que recibimos en el jwt, y entonces generar el reporte
   return jsonify({"msg": "asd"})
#Crear ruta para reporte quincenal   
#def quincena():
   #hay que crear tabla de parte quincenal