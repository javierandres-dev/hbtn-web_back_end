#!/usr/bin/env python3
""" Writing strings to Redis, Reading from Redis and recovering original type
"""
from redis.client import Redis
from typing import Union, Callable, Optional, Any
import uuid


class Cache:
    """ class """
    def __init__(self):
        """ constructor - store an instance of the Redis client as a private
        variable named _redis and flush the instance using flushdb """
        self._redis = Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ generate a random key (e.g. using uuid), store the input data in
        Redis using the random key and return the key """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None) ->\
            Union[str, bytes, int, float]:
        """ take a key string argument and an optional Callable argument named
            fn. This callable will be used to convert the data back to the
            desired format """
        if key:
            result = self._redis.get(key)
            return fn(result) if fn else result
