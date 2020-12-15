// The function should call the two other functions. When the promises are all
// settled it should return an array
import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled(signUpUser(firstName, lastName), uploadPhoto(fileName))
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.value,
    })));
}
