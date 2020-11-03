#!/usr/bin/env python3
""" Regex-ing, Log formatter, Create logger """
from typing import List
import re
import logging
PII_FIELDS = ('name', 'email', 'phone', 'ssn', 'password')
""" containing the fields from user_data.csv that are considered PII. """


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """ constructor """
        self.fields = fields
        super(RedactingFormatter, self).__init__(self.FORMAT)

    def format(self, record: logging.LogRecord) -> str:
        """ filter values in incoming log records """
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields: List[str],
                 redaction: str,
                 message: str,
                 separator: str) -> str:
    """ returns the log message obfuscated """
    for item in fields:
        message = re.sub(fr'{item}=.+?{separator}',
                         f'{item}={redaction}{separator}', message)
    return message


def get_logger() -> logging.Logger:
    """ returns a logging.Logger object """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    handler = logging.StreamHandler()
    handler.setFormatter(RedactingFormatter(PII_FIELDS))
    logger.addHandler(handler)
    return logger
