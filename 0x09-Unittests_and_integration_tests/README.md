# 0x09. Unittests and Integration Tests
:open_file_folder: Specializations - Web Stack programming ― Back-end  
:bust_in_silhouette: by Emmanuel Turlay, Staff Software Engineer at Cruise  
:copyright: **[Holberton School](https://www.holbertonschool.com/)**  
:bookmark: fixtures | integration tests | memoization | mocking | parameterization | python | unit tests

## Resources
### General
Unit testing is the process of testing that a particular function returns expected results for different set of inputs. A unit test is supposed to test standard inputs and corner cases. A unit test should only test the logic defined inside the tested function. Most calls to additional functions should be mocked, especially if they make network or database calls.

The goal of a unit test is to answer the question: if everything defined outside this function works as expected, does this function work as expected?

Integration tests aim to test a code path end-to-end. In general, only low level functions that make external calls such as HTTP requests, file I/O, database I/O, etc. are mocked.

Integration tests will test interactions between every part of your code.

Execute your tests with
``` $ python -m unittest path/to/test_file.py ```
### Read or watch:
* [unittest — Unit testing framework](https://docs.python.org/3/library/unittest.html)
* [unittest.mock — mock object library](https://docs.python.org/3/library/unittest.mock.html)
* [How to mock a readonly property with mock?](https://stackoverflow.com/questions/11836436/how-to-mock-a-readonly-property-with-mock)
* [parameterized](https://pypi.org/project/parameterized/)
* [Memoization](https://en.wikipedia.org/wiki/Memoization)

## Learning Objectives
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/2012/04/feynman-technique/), without the help of Google:
### General
* The difference between unit and integration tests.
* Common testing patterns such as mocking, parametrizations and fixtures

## Requirements
* A ```README.md``` file.

## Tasks
* [x] 0. Parameterize a unit test
* [x] 1. Parameterize a unit test
* [x] 2. Mock HTTP calls
* [x] 3. Parameterize and patch
* [x] 4. Parameterize and patch as decorators
* [x] 5. Mocking a property
* [x] 6. More patching
* [x] 7. Parameterize
* [x] 8. Integration test: fixtures
* [ ] 9. Integration tests

## Software engineer
Javier Andrés Garzón Patarroyo  
:octocat: [GitHub](https://github.com/javierandresgp/)
