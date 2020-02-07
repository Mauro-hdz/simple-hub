#Will create the connection for the db here and export to the server file and the models folder
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
load_dotenv()

password = os.environ['MYSQL_PW']
user = os.environ['USER_NAME']

engine = create_engine('mysql+mysqlconnector://' + user + ':' + password + '@127.0.0.1:3306/simplehub_db') 
