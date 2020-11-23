#!/usr/bin/env python3
""" Parameterize a unit test """
import unittest
from parameterized import parameterized
from utils import access_nested_map


class TestAccessNestedMap(unittest.TestCase):
    """ testcase """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, answer):
        """ method to test that the method returns what it is supposed to. """
        self.assertEqual(access_nested_map(nested_map, path), answer)
