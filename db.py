from sqlalchemy import create_engine, Column, Integer, String, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///employees.db', echo=True)

Base = declarative_base()

class Employee(Base):
    __tablename__ = 'employees'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    position = Column(String)
    skills = Column(JSON)

Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

employee1 = Employee(name='John', position='Software Engineer', skills=['Python', 'SQL', 'JavaScript', 'Java', 'C++', 'Solidity', 'Blockchain'])
employee2 = Employee(name='Jane', position='Data Scientist', skills=['Python', 'R', 'Machine Learning', 'Java', 'RPA'])
employee3 = Employee(name='Jose', position='Junior Developer', skills=['Python', 'Javascript', 'AI', 'Java', 'ReactJS', 'AngularJS'])
employee4 = Employee(name='Sara', position='Middle Developer', skills=['Javascript', 'C++', 'Cybersecurity', 'Testing', 'Blockchain', 'Ruby'])
employee5 = Employee(name='Carlos', position='Senior Developer', skills=['Python', 'R', 'C++', 'Docker', 'Testing', 'Cybersecurity'])

try:
    session.add(employee1)
    session.add(employee2)
    session.add(employee3)
    session.add(employee4)
    session.add(employee5)

    session.commit()
    print("Successful")
except Exception as e:
    print("Error during commit:", e)
