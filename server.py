from flask import Flask, jsonify
from DB.test import rdm_string      #this is how to import another file in Python
from controller.api import api
app = Flask(__name__)

meeting = {
    'date': '02-12-2020',
    'attending': 'bob, dylan, mary, sue',
    'random_string': rdm_string
}

@app.route('/', methods=['GET'])
def hello():
    return jsonify(meeting)

api(app)

if __name__ == '__main__':
    app.debug = True
    app.run()