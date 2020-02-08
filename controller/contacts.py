from flask import jsonify, request
from models.contact import Contact

def contact_api(app, session):
    @app.route('/api/contact/one/<id>', methods=['GET'])
    def one_contact(id):
        if request.method == 'GET':
            instance_found = session.query(Contact).filter_by(id=id).first()
            response = {
                'id': instance_found.id,
                'name': instance_found.name,
                'title': instance_found.title,
                'email': instance_found.email,
                'phoneNumber': instance_found.phone_number,
                'note': instance_found.note
            }
            print(response, 'Instance was found')
            return jsonify(response)


    @app.route('/api/contact/all', methods=['GET'])
    def all_contacts():
        if request.method == 'GET':
            response = {
                'data': []
            }
            for instance in session.query(Contact).all():
                contact_instance = {
                    'name': instance.name,
                    'title': instance.title,
                    'email': instance.email,
                    'phoneNumber': instance.phone_number,
                    'note': instance.note
                }
                response['data'].append(contact_instance)
            print(response, 'All instances were found.')
            return jsonify(fish)
    

    @app.route('/api/contact/add', methods=['POST'])
    def add_contact():
        cat = {
            'cat': 'lynx',
            'age': 2,
            'color': 'white'
        }
        return jsonify(cat)
        

    @app.route('/api/contact/update/<id>', methods=['PUT'])
    def update_contact():
        return 'Update route'


    @app.route('/api/contact/delete/<id>', methods=['DELETE'])
    def delete_contact():
        bird = {
            'id': id,
            'bird': 'canary',
            'age': 1,
            'color': 'yellow'
        }
        return jsonify(bird)