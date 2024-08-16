const USER_URL = "https://webdev-music-003b5b991590.herokuapp.com/user/";

export async function fetchToken({ email, password }: {email:string, password: string}) {
  const tokens = await fetch(`${USER_URL}token/`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!tokens.ok) {
    throw new Error(tokens.statusText);
  }
  
  return tokens.json();
}

export async function refreshToken(refresh: string) {
  const res = await fetch(`${USER_URL}token/refresh/`, {
    method: "POST",
    body: JSON.stringify({
      refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
