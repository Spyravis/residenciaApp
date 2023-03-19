  
import os
from flask_admin import Admin
from .models import db, User, Role_user, Resident, Night_report, Message, User_has_booking, Quincenal, Exit_permit
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    class MyModel(ModelView):
        column_display_pk = True
        column_display_fk = True
  
    admin.add_view(MyModel(User, db.session))
    admin.add_view(MyModel(Role_user, db.session))
    admin.add_view(MyModel(Resident, db.session))
    admin.add_view(MyModel(Exit_permit, db.session))
    admin.add_view(MyModel(Night_report, db.session))
    admin.add_view(MyModel(Message, db.session))
    admin.add_view(MyModel(User_has_booking, db.session))
    admin.add_view(MyModel(Quincenal, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))