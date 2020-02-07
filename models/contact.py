from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class Contact(Base):
    __tablename__ = 'contacts'

    id = Column(Integer, primary_key=True)
    name = Column(String(50))
    title = Column(String(50))
    email = Column(String(60))
    phone_number = Column(String(30))
    note = Column(String(2000))

    def __init__(self, name, title, email, phone_number, note):
        self.name = name
        self.title = title
        self.email = email
        self.phone_number = phone_number
        self.note = note