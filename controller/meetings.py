from flask import jsonify, request
from models.meeting import Meeting

def meeting_api(app, session):
    @app.route('/api/meeting/all', methods=['GET'])
    def all_meetings():
        if request.method == 'GET':
            fish = {
                'type': 'golfish',
                'color': 'yellow'
            }
            return jsonify(fish)
    

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

    @app.route('/api/meeting/delete/<id>')
    def delete_meeting(id):
        bird = {
            'id': id,
            'bird': 'canary',
            'age': 1,
            'color': 'yellow'
        }
        return jsonify(bird)
