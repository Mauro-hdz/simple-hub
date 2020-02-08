from flask import Flask, jsonify
from DB.connection import engine     
from controller import meetings, contacts, tasks   #importing our routes
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

connection = engine.connect()

Session = sessionmaker(bind=engine)
session = Session()

if connection:
    print('Database is successfully connected!')

    
meetings.meeting_api(app, session)  #initializing routes
contacts.contact_api(app, session)
tasks.task_api(app, session)

if __name__ == '__main__':
    app.debug = True
    app.run()