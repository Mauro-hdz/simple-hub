from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean

Base = declarative_base()

class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True)
    task = Column(String(400))
    completed = Column(Boolean)

    def __init__(self, task, completed):
        self.task = task
        self.completed = completed