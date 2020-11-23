#!/usr/bin/env python3
""" Parameterize and patch as decorators """
import unittest
from unittest.mock import patch
from parameterized import parameterized
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """ TESTCASE """
    """ inputs to test the functionality """
    @parameterized.expand([
        ("google"),
        ("abc"),
        ])
    @patch("client.get_json", return_value={"payload": True})
    def test_org(self, org_name, mock_get):
        """ test that GithubOrgClient.org returns the correct value """
        test_client = GithubOrgClient(org_name)
        test_return = test_client.org
        self.assertEqual(test_return, mock_get.return_value)
        mock_get.assert_called_once
