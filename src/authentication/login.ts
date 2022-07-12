import { setToken } from './set-token';

export function login(username: string, password: string, apiUrl: string) {
  const requestOptions = {
    method: 'POST',
    body: new URLSearchParams(`username=${username}&password=${password}`)
  };

  return fetch(`${apiUrl}/api/auth/login`, requestOptions)
    .then((response) => {
      if(response.ok) {
        const token = response.headers.get('x-auth-token');

        setToken(token);

        console.log("LOGGED IN");
      }

      return response;
    });
}
