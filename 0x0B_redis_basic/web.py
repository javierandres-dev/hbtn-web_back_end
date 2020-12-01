#!/usr/bin/env python3
""" Implementing an expiring web cache and tracker
    obtain the HTML content of a particular URL and returns it """
from redis.client import Redis
import requests
redis = Redis()
count = 0


def get_page(url: str) -> str:
    """ track how many times a particular URL was accessed in the key
        "count:{url}"
        and cache the result with an expiration time of 10 seconds """
    key = f"count:{url}"
    redis.set(key, count)
    resp = requests.get(url)
    redis.incr(key)
    redis.setex(key, 10, redis.get(key))
    return resp.text


if __name__ == "__main__":
    get_page('http://slowwly.robertomurray.co.uk')
