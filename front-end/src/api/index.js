import { axiosClient } from '../utils';

export async function signinUserAPI(user) {
  try {
    const res = await axiosClient.post('/signin', user);
    console.log(res.data.Data);
  } catch (error) {
    console.log(error.message);
  }
}
