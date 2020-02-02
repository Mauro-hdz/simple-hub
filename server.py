from flask import Flask, jsonify

app = Flask(__name__)

meeting = {
    'date': '02-12-2020',
    'attending': 'bob, dylan, mary, sue'
}

@app.route('/', methods=['GET'])
def hello():
    return jsonify(meeting)

if __name__ == '__main__':
    app.debug = True
    app.run()