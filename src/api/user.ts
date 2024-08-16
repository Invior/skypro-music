const USER_URL = "https://webdev-music-003b5b991590.herokuapp.com/user/";

export async function fetchUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${USER_URL}login/`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message);
    }

    return json;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function fetchUserSignup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch(`${USER_URL}signup/`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username: email,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message);
    }

    return json;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
