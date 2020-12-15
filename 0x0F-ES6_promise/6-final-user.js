import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signup = await signUpUser(firstName, lastName)
  .then((value) => ({
    status: 'fulfilled',
    value,
  }));
  .catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));
  const upload = await uploadPhoto(fileName)
  .then(() => ({
    status: 'fulfilled',
    value,
  }));
  .catch((error) => ({
    status: 'rejected',
    value: `${error.name}: ${error.message}`,
  }));
  return [signup, upload];
}
