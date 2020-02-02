
def api(app):
    @app.route('/api')
    def dictionary():
        return 'hello world'
