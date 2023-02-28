from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    residents = db.relationship("Resident", secondary="user_has_resident", backref="User" )
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)
    role_user_id = db.Column(db.Integer, db.ForeignKey('role_user.id'), nullable=False)      
    messages = db.relationship("Message", backref="User")
    reports = db.relationship("Night_report", backref="User")
    bookings = db.relationship("User_has_booking", backref="User")


    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "email": self.email,
            "phone": self.phone,
            "role_user": self.role_user_id,
            "residents" : [resident.serialize() for resident in self.residents]
        }

class Resident(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    reports = db.relationship("Night_report", backref="Resident")
    messages = db.relationship("Message", backref="Resident")
    bookings = db.relationship("User_has_booking", backref="Resident")

    def __repr__(self):
        return f'<Resident {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
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

class Calendar_booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    visit_day = db.Column(db.String(120), unique=False, nullable=True)
    hour_start = db.Column(db.DateTime, unique=False, nullable=False)
    hour_end = db.Column(db.DateTime, unique=False, nullable=False)
    bookings = db.relationship("User_has_booking", backref="Calendar_booking")
    

    def __repr__(self):
        return f'{self.hour_start} to {self.hour_end}'

    def serialize(self):
        return {
            "id": self.id,
            "hour_start": self.hour_start,
            "hour_end": self.hour_end,
        }

class User_has_booking(db.Model):
    id = db.Column(db.Integer, primary_key=True),
    is_online = db.Column(db.Boolean(), unique=False, nullable=False)
    url = db.Column(db.String(250), unique=True, nullable=True)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False , primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)
    calendar_booking_id = db.Column(db.Integer, db.ForeignKey('calendar_booking.id'),nullable=False , primary_key=True)
    
    def serialize(self):
        return {
            "id": self.id,
            "is_online": self.is_online,
            "url": self.url,
            "resident_id": self.resident_id,
            "user_id": self.user_id,
            "calendar_booking_id": self.calendar_booking_id
        }

class Night_report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime , unique=False, nullable=False)
    incidences = db.Column(db.Boolean(), unique=False, nullable=False)
    comments = db.Column(db.String(250), unique=False, nullable=True)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "incidences": self.incidences,
            "comments": self.comments,
            "resident_id": self.resident_id,
            "user_id": self.user_id,            
        }

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(120), unique=False, nullable=True)
    message = db.Column(db.String(250), unique=False, nullable=True)
    url_attached = db.Column(db.String(250), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    resident_id = db.Column(db.Integer, db.ForeignKey('resident.id'), nullable=False)
    
    

    def serialize(self):
        return {
            "id": self.id,
            "subject": self.subject,
            "message": self.message,
            "url_attached": self.url_attached,
            "user_id": self.user_id, 
            "resident" : resident.serialize(),
        }