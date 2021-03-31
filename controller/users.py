from flask import jsonify, request
from models.user import User

def users_api(app, session) :
    @app.route('/api/user/login', methods=['POST'])
    def user_login():
        if request.method == "POST":
            data = request.json
            user = session.query(User).filter(User.email == data['userEmail']).first()
            if (user != None):
               if (user.passcode == data['userPasscode']):
                   print('passcode is VALID')
                   return jsonify({'loginSuccess': True})
               else:
                   print('passcode NOT VALID')
                   return jsonify({'loginSuccess': False, 'message': 'wrong password'})
            else:
                print('User Not Found')
                return jsonify({'loginSuccess': False, 'message': 'account not found'})

    @app.route('/api/user/create-account', methods=['POST'])
    def create_user_account():
        if request.method == 'POST' :
            data = request.json

            new_user = User(data['userEmail'], data['userPasscode'])
            session.add(new_user)
            session.commit()
            print('New user was successfully added', data)
            return 'User was added successfully'



