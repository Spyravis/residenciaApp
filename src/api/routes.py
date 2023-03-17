"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Quincenal, Night_report
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
def current_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id = user_id)
    return jsonify({"response": x.serialize() for x in user}), 200

@api.route('/login', methods=['POST'])
def user_login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    user = User.query.filter_by(email= body_email, password=body_password).first()
    if not user:
        return jsonify({"Error": "Invalid credentials"}), 401
    token = create_access_token(identity=user.id)

    return jsonify({"response": "Hola", "token": token}), 200

    #Crear ruta para reporte nocturo
@api.route('/parte', methods=['GET'])
@jwt_required()
def parte():
   #user_id = get_jwt_identity()
   query=Quincenal.query.all()
   data=[report.serialize() for report in query]
   #acceder, mediante la relacion entre tablas, al paciente que esta relacionado al ID del usuario que recibimos en el jwt, y entonces generar el reporte
   return jsonify({"result": data}), 200
#Crear ruta para reporte quincenal  
#  
@api.route('/parteQuincenal', methods=['GET'])
@jwt_required()
def quincenal():
   user_id = get_jwt_identity()
   query=Night_report.query.order_by(Night_report.date.asc()).limit(15)
   data=[report.serialize() for report in query]
   #print(data)
   #acceder, mediante la relacion entre tablas, al paciente que esta relacionado al ID del usuario que recibimos en el jwt, y entonces generar el reporte
   return jsonify({"result": data}), 200
#Crear ruta para reporte quincenal  

@api.route('/parteNocturno', methods=['GET'])
@jwt_required()
def nocturno():
    user_id = get_jwt_identity()
    night_report = Night_report.query.filter_by(user_id = user_id).order_by(Night_report.date.desc()).first()
    print(night_report.serialize())
    return jsonify({"result":night_report.serialize()})
   