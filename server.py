from flask import Flask, jsonify
from DB.connection import engine     
from controller.api import api    #importing our routes
app = Flask(__name__)

connection = engine.connect()
if connection:
    print('Database is successfully connected!')
    
api(app)  #initializing routes

if __name__ == '__main__':
    app.debug = True
    app.run()