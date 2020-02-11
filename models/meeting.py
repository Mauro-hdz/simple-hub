from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class Meeting(Base):
    __tablename__ = 'meetings'

    id = Column(Integer, primary_key=True)
    subject = Column(String(80))
    location = Column(String(100))
    date = Column(String(25))
    time = Column(String(10))
    attending = Column(String(2000))

    def __init__(self, subject, location, date, time, attending):
        self.subject = subject
        self.location = location
        self.date = date
        self.time = time
        self.attending = attending