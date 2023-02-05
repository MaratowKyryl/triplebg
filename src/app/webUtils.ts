import { LOGIN_URL, AZURE_FUNCTION } from './constants';

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
    const response =  await fetch(AZURE_FUNCTION, options)

    const data = await response.json()

    return data;
  } catch (e) {
    console.log(e)
  }

}