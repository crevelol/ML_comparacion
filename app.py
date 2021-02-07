from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/iris')
def iris():
    return render_template('iris.html')


@app.route('/wine')
def wine():
    return render_template('wine.html')

@app.route('/bench')
def bench():
    return render_template('bench.html')

# @app.route('/iris')
# def iris():
#     return render_template('iris.html')


app.run()

