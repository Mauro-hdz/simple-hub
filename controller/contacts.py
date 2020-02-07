from flask import jsonify

def meeting_api(app):
    @app.route('/api/contact/all')
    def fish():
        fish = {
            'type': 'goldfish'
        }
        return jsonify(fish)
    

    @app.route('/api/contact/add')
    def cat():
        cat = {
            'cat': 'lynx',
            'age': 2,
            'color': 'white'
        }
        return jsonify(cat)

    @app.route('/api/contact/delete/<id>')
    def bird(id):
        bird = {
            'id': id,
            'bird': 'canary',
            'age': 1,
            'color': 'yellow'
        }
        return jsonify(bird)