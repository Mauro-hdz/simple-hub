from flask import jsonify, request
from models.meeting import Meeting

def meeting_api(app, session):
    @app.route('/api/meeting/one/<id>', methods=['GET'])
    def one_meeting(id):
        if request.method == 'GET':
           instance_found = session.query(Meeting).filter(Meeting.id == id).first()
           response = {
               'subject': instance_found.subject,
               'location': instance_found.location,
               'date': instance_found.date,
               'time': instance_found.time,
               'attending': instance_found.attending,
               'id': instance_found.id
           }
           print(response, f'Instance with id: {id} was found.')
           return jsonify(response)

           
    @app.route('/api/meeting/all', methods=['GET'])
    def all_meetings():
        if request.method == 'GET':
            response = {
                'data': []
            }
            for meeting in session.query(Meeting).all():
                meeting_instance = {
                    'subject': meeting.subject,
                    'location': meeting.location,
                    'date': meeting.date,
                    'time': meeting.time,
                    'attending': meeting.attending,
                    'id': meeting.id
                }
                response['data'].append(meeting_instance)
            print(response, 'All instances were found.')
            return jsonify(response)
    

    @app.route('/api/meeting/add', methods=['POST'])
    def add_meeting():
        if request.method == 'POST':
            data = request.json
            meeting = {
                'subject': data['subject'],
                'location': data['location'],
                'date': data['date'],
                'time': data['time'],
                'attending': data['attending']
            }
            new_meeting = Meeting(
                meeting['subject'],
                meeting['location'],
                meeting['date'],
                meeting['time'],
                meeting['attending']
            )
            session.add(new_meeting)
            session.commit()
            print(meeting, 'Added To The Database Successfully.')
            return 'Instance added successfully'


    @app.route('/api/meeting/update/<id>', methods=['PUT'])
    def update_meeting(id):
        if request.method == 'PUT':
            update_this = session.query(Meeting).filter(Meeting.id == id).first()
            data = request.json
            
            update_this.subject = data['subject']
            update_this.location = data['location']
            update_this.date = data['date']
            update_this.time = data['time']
            update_this.attending = data['attending']
            session.commit()
            print(data)
            return f'Meeting with id: {id} was updated.'


    @app.route('/api/meeting/delete/<id>', methods=['DELETE'])
    def delete_meeting(id):
        if request.method == 'DELETE':
            selected_meeting = session.query(Meeting).filter_by(id=id).delete()
            session.commit()
            print('Meeting with id: {id}, was deleted.'.format(id=id))
            return f'Meeting with id: {id}, was deleted.'
