from flask import jsonify

def api(app):
    @app.route('/api/dog')
    def fish():
        fish = {
            'type': 'goldfish'
        }
        return jsonify(fish)
    

    @app.route('/api/cat')
    def cat():
        cat = {
            'cat': 'lynx',
            'age': 2,
            'color': 'white'
        }
        return jsonify(cat)

    @app.route('/api/bird')
    def bird():
        bird = {
            'bird': 'canary',
            'age': 1,
            'color': 'yellow'
        }
        return jsonify(bird)
