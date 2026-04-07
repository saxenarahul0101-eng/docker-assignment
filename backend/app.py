from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/submit",methods=["POST"])
def submit():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    return jsonify({"message":f"Hello {name}, your email is {email}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
