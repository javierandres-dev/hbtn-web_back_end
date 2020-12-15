import signUpUser from './4-all-reject';
import uploadPhoto from './5-all-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = {status: 'pending ', value,};
  const photo = {status: 'pending ', value,};
  try {
    const signup = await signUpUser(firstName, lastName);
    user.status = signup.status;
    user.value = signup.value;
  } catch (error) {
    user.status = 'rejected';
    user.value = error.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    photo.status = upload.status;
    photo.value = upload.value;
  } catch (error) {
    photo.status = 'rejected';
    photo.value = error.toString();
  }

  return [user, photo];
}
