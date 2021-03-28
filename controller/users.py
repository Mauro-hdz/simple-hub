from flask import jsonify, request
from models.user import User

def users_api(app, session) :
    @app.route('/api/user/login', methods=['POST']):
    def user_login():
        if request.method = "POST":
            data = request.json
           user = session.query(User).filter(User.email = data['email']).first()
           print("USER: ", user)

