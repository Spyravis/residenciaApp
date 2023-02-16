"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

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