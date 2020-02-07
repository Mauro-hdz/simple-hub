from flask import jsonify

def meeting_api(app):
    @app.route('/api/task/all')
    def fish():
        fish = {
            'type': 'goldfish'
        }
        return jsonify(fish)
    

    @app.route('/api/task/add')
    def cat():
        cat = {
            'cat': 'lynx',
            'age': 2,
            'color': 'white'
        }
        return jsonify(cat)

    @app.route('/api/task/delete/<id>')
    def bird(id):
        bird = {
            'id': id,
            'bird': 'canary',
            'age': 1,
            'color': 'yellow'
        }
        return jsonify(bird)