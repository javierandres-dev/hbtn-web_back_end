import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return await Promise.allSettled(signUpUser(firstName, lastName), uploadPhoto(fileName))
    .then((results) => await results.map((result) => ({
      status: result.status,
      value: result.value,
    })));
}
