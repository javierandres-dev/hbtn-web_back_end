#!/usr/bin/env python3
""" Basic auth, Basic - Base64 part """
from api.v1.auth.auth import Auth


class BasicAuth(Auth):
    """ BasicAuth class """
    def extract_base64_authorization_header(self,
                                            authorization_header: str
                                            ) -> str:
        """ returns the Base64 part of the Authorization header
            for a Basic Authentication """
        if authorization_header is None:
            return None
        if not isinstance(authorization_header, str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        base = authorization_header.split(' ')
        return base[1]
