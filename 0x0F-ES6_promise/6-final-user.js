import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName)
  .then((data) => {
    status: 'fulfilled',
    value,
  })
  .catch((error) => {
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  });
  const photo = await uploadPhoto(fileName);
    .then((data) => {
      status: 'fulfilled',
      value,
  })
  .catch((error) => {
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  });
  return [user, photo];
}
