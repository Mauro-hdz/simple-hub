from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class User(Base) :
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(30))
    passcode = Column(String(50))

    def __init__(self, email, passcode):
        self.id = id
        self.email = email
        self.passcode = passcode