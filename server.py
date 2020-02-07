from flask import Flask, jsonify
from DB.connection import engine     
from controller.meetings import meeting_api    #importing our routes
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

connection = engine.connect()

Session = sessionmaker(bind=engine)
session = Session()

if connection:
    print('Database is successfully connected!')

    
meeting_api(app, session)  #initializing routes

if __name__ == '__main__':
    app.debug = True
    app.run()