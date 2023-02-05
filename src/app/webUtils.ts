import { LOGIN_URL, GET_DATA_URL } from './constants';

export const asyncPostRequestUnauthorized = async (username: string, password: string) => {

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify({
      username,
      password,
    }),
  };


  try {
    const response =  await fetch(LOGIN_URL, options)

    const data = await response.json()

    return data;
  } catch (e) {
    console.log(e)
  }

}

export const asyncGetRequestAuthorized = async (token: string) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  const options: RequestInit = {
    method: 'GET',
    headers
  }

  try {
    const response = await fetch(GET_DATA_URL, options);

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}