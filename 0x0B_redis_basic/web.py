#!/usr/bin/env python3
""" Implementing an expiring web cache and tracker """
import redis
import requests
r = redis.Redis()
count = 0


def get_page(url: str) -> str:
    """ obtain the HTML content of a particular URL and returns it """
    key = "count:{}".format(url)
    r.set(key, count)
    resp = requests.get(url)
    r.incr(key)
    r.setex(key, 10, r.get(key))
    return resp.text


if __name__ == "__main__":
    get_page('http://slowwly.robertomurray.co.uk')
