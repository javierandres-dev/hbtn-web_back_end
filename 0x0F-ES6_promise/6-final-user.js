import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const arr = await Promise.all(signUpUser(firstName, lastName), uploadPhoto(fileName))
    .then((data) => data.map((datum) => ({
      status: datum.status,
      value: datum.value,
    })));
  return arr;
}
