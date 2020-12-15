import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => {
      console.log(resp[0].body, resp[1].firstName, resp[1].lasName);
    })
    .catch(() => console.log('Signup system offline'));
}
