from flask import Flask, jsonify, send_from_directory
from DB.connection import engine, production_engine    
from controller import meetings, contacts, tasks   #importing our routes
from sqlalchemy.orm import sessionmaker
import os

app = Flask(__name__, static_folder='client/build')

# Production code for rendering React index.html
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


ENV = 'dev'

if ENV == 'dev':
    app.debug = True
    connection = engine.connect()
    if connection:
        print('Development Database is successfully connected!')
        print(engine)
else:
    app.debug = False
    prod_connection = production_engine.connect()
    if prod_connection:
        print('Production Database is connected!')
        print(production_engine)





Session = sessionmaker(bind=production_engine)
session = Session()

    
meetings.meeting_api(app, session)  #initializing routes
contacts.contact_api(app, session)
tasks.task_api(app, session)

if __name__ == '__main__':
    app.run(use_reloader=True, threaded=True)