#!//bin/env python3
""" Basic auth, Basic - Base64 part, Basic - Base64 decode """
from api.v1.auth.auth import Auth
from base64 import b64decode


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

    def decode_base64_authorization_header(self,
                                           base64_authorization_header: str
                                           ) -> str:
        """ returns the decoded value of a Base64 string """
        if base64_authorization_header is None:
            return None
        if not isinstance(base64_authorization_header, str):
            return None
        try:
            baseEncode = base64_authorization_header.encode('utf-8')
            baseDecode = b64decode(baseEncode)
            decodedValue = baseDecode.decode('utf-8')
            return decodedValue
        except BaseException:
            return None
