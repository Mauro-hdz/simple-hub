from flask import jsonify, request
from models.user import User

def users_api(app, session) :
    @app.route('/api/user/login', methods=['POST'])
    def user_login():
        if request.method == "POST":
            data = request.json
            print("USER DATA", data['userPasscode'])
            user = session.query(User).filter(User.email == data['userEmail']).first()
            if (user != None):
               if (user.passcode == data['userPasscode']):
                   print("!!!!")
                   print(user.passcode)
                   return jsonify({'loginSuccess': True})
               else:
                   return jsonify({'loginSuccess': False, 'message': 'wrong password'})
            else:
                return jsonify({'loginSuccess': False, 'message': 'account not found'})


