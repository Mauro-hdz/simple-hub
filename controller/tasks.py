from flask import jsonify, request
from models.task import Task

def task_api(app, session):
    @app.route('/api/task/all', methods=['GET'])
    def all_tasks():
        if request.method == 'GET':
            response = {
                'data': []
            }
            for task in session.query(Task).all():
                task_instance = {
                    'id': task.id,
                    'task': task.task,
                    'category': task.category,
                    'completed': task.completed
                }
                response['data'].append(task_instance)
            print(response, 'All tasks were found.')
            return jsonify(response)


    @app.route('/api/task/one/<id>', methods=['GET'])
    def one_task(id):
        if request.method == 'GET':
            task_found = session.query(Task).filter_by(id=id).first()
            response = {
                'id': task_found.id,
                'task': task_found.task,
                'category': task_found.category,
                'completed': task_found.completed
            }
            print(response, f'Task with id: {id} was found')
            return jsonify(response)
    
    
    @app.route('/api/task/add', methods=['POST'])
    def add_task():
        if request.method == 'POST':
            new_task = Task(
                request.form.get('task'),
                request.form.get('category'),
                request.form.get('completed')
            )
            session.add(new_task)
            session.commit()
            print(new_task, 'New task was added.')
            return 'New task was added.'


    @app.route('/api/task/update/<id>', methods=['PUT'])
    def update_task(id):
        if request.method == 'PUT':
            update_this = session.query(Task).filter(Task.id == id).first()
            
            update_this.task = request.form.get('task')
            update_this.category = request.form.get('category')
            update_this.completed = request.form.get('completed')
            session.commit()
            print(update_this, f'Task with id: {id} was updated.')
            return f'Task with id: {id} was updated.'
    

    @app.route('/api/task/delete/<id>', methods=['DELETE'])
    def delete_task(id):
        if request.method == 'DELETE':
            session.query(Task).filter_by(id=id).delete()
            session.commit()
            print(f'Task with id: {id} was deleted.')
            return f'Task with id: {id} was deleted.'
    