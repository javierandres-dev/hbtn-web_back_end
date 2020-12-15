import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {
    status: 'pending',
    value: '',
  };
  const photo = {
    status: 'pending',
    value: '',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    user.status = 'fulfilled';
    user.value = signup;
  } catch (err) {
    user.status = 'rejected';
    user.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photo.status = 'fulfilled';
    photo.value = upload;
  } catch (err) {
    photo.status = 'rejected';
    photo.value = err.toString();
  }

  return [user, photo];
}
