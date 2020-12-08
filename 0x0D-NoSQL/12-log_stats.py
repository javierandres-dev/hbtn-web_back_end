#!/usr/bin/env python3
""" Log stats """
from pymongo import MongoClient


def log(a: dict) -> int:
    """return log"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginxLogs = client.logs.nginx
    return nginxLogs.count_documents(a)


def main():
    """ provides some stats about Nginx logs stored in MongoDB """
    print(f"{ log({}) } logs")
    print("Methods:")
    print(f"\tmethod GET: { log({'method': 'GET'}) }")
    print(f"\tmethod POST: { log({'method': 'POST'}) }")
    print(f"\tmethod PUT: {log({'method': 'PUT'})}")
    print(f"\tmethod PATCH: {log({'method': 'PATCH'})}")
    print(f"\tmethod DELETE: {log({'method': 'DELETE'})}")
    print(f"{log({'method': 'GET', 'path': '/status'})} status check")


if __name__ == "__main__":
    main()
