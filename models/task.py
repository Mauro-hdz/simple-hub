from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Boolean

Base = declarative_base()

class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True)
    task = Column(String(400))
    category = Column(String(25))
    completed = Column(Boolean)

    def __init__(self, task, category, completed):
        self.task = task
        self.category = category
        self.completed = completed