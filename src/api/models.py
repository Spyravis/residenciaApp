from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    photo = db.Column(db.String(250), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    residents = db.relationship("Resident", secondary="user_has_resident", backref="User" )
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    role_user_id = db.Column(db.Integer, db.ForeignKey('role_user.id'), nullable=False)      
    messages = db.relationship("Message", backref="User")
    reports = db.relationship("Night_report", backref="User")
    bookings = db.relationship("User_has_booking", backref="User")
    quincenales = db.relationship("Quincenal", backref="User")


    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "photo": self.photo,
            "email": self.email,
            "phone": self.phone,
            "role_user": self.role_user_id,
            "residents" : [resident.serialize() for resident in self.residents]
        }


class Resident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    users = db.relationship("User", secondary="user_has_resident", backref="Resident" )
    reports = db.relationship("Night_report", backref="Resident")
    messages = db.relationship("Message", backref="Resident")
    bookings = db.relationship("User_has_booking", backref="Resident")
    quincenales = db.relationship("Quincenal", backref="Resident")

    def __repr__(self):
        return f'<Resident {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
        }
    def resident_users(self):        
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "users" :[user.serialize() for user in self.users]
        }

user_has_resident= db.Table("user_has_resident",
    db.Column("resident_id", db.Integer, db.ForeignKey('resident.id'),nullable=False , primary_key=True),
    db.Column("user_id",db.Integer, db.ForeignKey('user.id'),nullable=False , primary_key=True)
)

class Role_user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    users = db.relationship("User", backref="Role_user" )

    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class Exit_permit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    booking = db.Column(db.DateTime, unique=False, nullable=False)
    
    def __repr__(self):
        return f'{self.booking}'

    def serialize(self):
        return {
            "id": self.id,
            "resident_id": self.resident_id,
            "user_id": self.user_id,
            "booking": self.booking
        }

class User_has_booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_online = db.Column(db.Boolean(), unique=False, nullable=False)
    url = db.Column(db.String(250), unique=False, nullable=True)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    booking = db.Column(db.DateTime, unique=False, nullable=False)

    def __repr__(self):
        return f'{self.booking}'

    def serialize(self):
        resident = Resident.query.get(self.resident_id)
        return {
            "id": self.id,
            "is_online": self.is_online,
            "url": self.url,
            "resident" : resident.serialize(),
            "user_id": self.user_id,
            "booking": self.booking
        }

class Night_report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime , unique=False, nullable=False)
    incidences = db.Column(db.Boolean(), unique=False, nullable=False)
    comments = db.Column(db.String(250), unique=False, nullable=True)
    sugar_level = db.Column(db.String(80), unique=False, nullable=False)
    oxygen_level = db.Column(db.String(80), unique=False, nullable=False)
    cholesterol_level = db.Column(db.String(80), unique=False, nullable=False)
    leukocytes_level = db.Column(db.String(80), unique=False, nullable=False)
    redbloods_level = db.Column(db.String(80), unique=False, nullable=False)
    whitebloods_level = db.Column(db.String(80), unique=False, nullable=False)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)

    def serialize(self):
        resident = Resident.query.get(self.resident_id)
        user = User.query.get(self.user_id)
        return {
            "id": self.id,
            "date": self.date,
            "incidences": self.incidences,
            "comments": self.comments,
            "sugar_level": self.sugar_level,
            "oxygen_level": self.oxygen_level,
            "cholesterol_level": self.cholesterol_level,
            "leukocytes": self.leukocytes_level,
            "redbloods_level": self.redbloods_level,
            "whitebloods_level": self.whitebloods_level,
            "resident": {"id":resident.id, "name":resident.name, "surname":resident.name},
            "user": {"id":user.id, "name":user.name},           
        }

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(120), unique=False, nullable=True)
    message = db.Column(db.String(250), unique=False, nullable=True)
    url_attached = db.Column(db.String(250), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'), nullable=False)
    readed = db.Column(db.Boolean(), unique=False, nullable=False,default=False)
    
    def serialize(self):
        resident = Resident.query.get(self.resident_id)
        return {
            "id": self.id,
            "subject": self.subject,
            "message": self.message,
            "url_attached": self.url_attached,
            "user_id": self.user_id, 
            "resident" : resident.serialize(),
            "readed": self.readed,
        }

class Quincenal(db.Model):
    id = db.Column(db.Integer, primary_key=True)           
    date = db.Column(db.DateTime , unique=False, nullable=False)
    incidences = db.Column(db.Boolean(), unique=False, nullable=False)
    comments = db.Column(db.String(250), unique=False, nullable=True)
    sugar_level = db.Column(db.String(80), unique=False, nullable=False)
    oxygen_level = db.Column(db.String(80), unique=False, nullable=False)
    cholesterol_level = db.Column(db.String(80), unique=False, nullable=False)
    leukocytes_level = db.Column(db.String(80), unique=False, nullable=False)
    redbloods_level = db.Column(db.String(80), unique=False, nullable=False)
    whitebloods_level = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    def __repr__(self):
        return f'<Quincenal {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "incidences": self.incidences,
            "comments": self.comments,
            "sugar_level": self.sugar_level,
            "oxygen_level": self.oxygen_level,
            "cholesterol_level": self.cholesterol_level,
            "leukocytes": self.leukocytes_level,
            "redbloods_level": self.redbloods_level,
            "whitebloods_level": self.whitebloods_level,
            "resident_id": self.resident_id,
            "user_id": self.user_id,            
        }
