from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class User(Base) :
    __tablename__ = "users"

    email = Column(String(30))
    password = Column(String(50))

    def __init__(self, email, password):
        self.email = email
        self.password = password