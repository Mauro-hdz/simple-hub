#Will create the connection for the db here and export to the server file and the models folder
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
load_dotenv()

# password = os.environ['MYSQL_PW']
# user = os.environ['USER_NAME']
prod_user = os.environ['PROD_USER']
prod_pw = os.environ['PROD_PW']
host = os.environ['HOST']
database = os.environ['DATABASE']

# engine = create_engine('mysql+mysqlconnector://' + user + ':' + password + '@127.0.0.1:3306/simplehub_db') 

production_engine = create_engine('mysql+mysqlconnector://' + prod_user + ':' + prod_pw + '@' + host + ':3306/' + database)
