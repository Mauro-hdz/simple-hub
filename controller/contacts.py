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
                    'note': instance.note,
                    'id': instance.id
                }
                response['data'].append(contact_instance)
            print(response, 'All instances were found.')
            return jsonify(response)
    

    @app.route('/api/contact/add', methods=['POST'])
    def add_contact():
        if request.method == 'POST':
            print('JSON')
            print(request.json)
            data = request.json
            contact = {
                'name': data['name'],
                'title': data['title'],
                'email': data['email'],
                'phone_number': data['phoneNumber'],
                'note': '',
            }
            new_contact = Contact(
                contact['name'],
                contact['title'],
                contact['email'],
                contact['phone_number'],
                contact['note']
            )
            session.add(new_contact)
            session.commit()
            print(contact, 'New contact was added.')
            return 'New contact was added'
        

    @app.route('/api/contact/update/<id>', methods=['PUT'])
    def update_contact(id):
        if request.method == 'PUT':
            instance_found = session.query(Contact).filter_by(id=id).first()
            data = request.json

            instance_found.name = data['name']
            instance_found.title = data['title']
            instance_found.email = data['email']
            instance_found.phone_number = data['phoneNumber']
            instance_found.note = data['note']
            session.commit()  
            return f'Contact with id: {id} was updated.'         


    @app.route('/api/contact/delete/<id>', methods=['DELETE'])
    def delete_contact(id):
        if request.method == 'DELETE':
            session.query(Contact).filter(Contact.id == id).delete()
            session.commit()
            print(f'Contact with id: {id} was deleted.')
            return 'Contact with id: {id} was deleted.'.format(id=id) 