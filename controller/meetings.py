from flask import jsonify, request
from models.meeting import Meeting

def meeting_api(app, session):
    @app.route('/api/meeting/one/<id>', methods=['GET'])
    def one_meeting(id):
        if request.method == 'GET':
           for keys in session.query(Meeting).filter(Meeting.id == id):
               response = {
                   'subject': keys.subject,
                   'location': keys.location,
                   'date': keys.date,
                   'time': keys.time,
                   'attending': keys.attending,
                   'id': keys.id
               }
               print(response, 'Instance was found.')
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
            meeting = {
                'subject': request.form.get('subject'),
                'location': request.form.get('location'),
                'date': request.form.get('date'),
                'time': request.form.get('time'),
                'attending': request.form.get('attending')
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
            return jsonify(meeting)

    @app.route('/api/meeting/delete/<id>', methods=['DELETE'])
    def delete_meeting(id):
        if request.method == 'DELETE':
            selected_meeting = session.query(Meeting).filter_by(id=id).delete()
            session.commit()
            print('Meeting with id: {id}, was deleted.'.format(id=id))
            return f'Meeting with id: {id}, was deleted.'
