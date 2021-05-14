from flask import Flask, jsonify
import pymongo 
from pymongo import MongoClient

service = Flask(__name__)

def get_db():
    client = MongoClient(host='test_mongodb',
                         port=27017, 
                         username='root', 
                         password='quezia',
                         authSource="admin")
    db = client["burguer_db"]
    return db

@service.route('/')
def ping_server():
    return "BurguersTI"

@service.route('/burguerName')
def get_burguers():
    db = get_db()
    _burguers = db.burguer_tb.find()
    burguers = [{"id": burguer["id"], "name": burguer["name"], "image": burguer["image"] ,"price": burguer["price"], "ingredients": burguer["ingredients"], "comments": burguer["comments"]} for burguer in _burguers]
    return jsonify({"burguers": burguers})

if __name__=='__main__':
    service.run(host='0.0.0.0', port=5000)    