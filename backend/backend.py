from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_agent import get_agent_response
app= Flask(__name__)
CORS(app) 
@app.route('/get_response',methods=['POST'])
def report():
    data=request.get_json()
    query=data.get('query')
    response=get_agent_response(query)
    return jsonify({"response": response})
if __name__=="__main__":
    app.run(debug=True)