export async function login(data: any) {
  const headers = new Headers();
  headers.set("Content-Type", "application/x-www-form-urlencoded");

  const response = await fetch(`${process.env.API_URL}/auth/sign-in`, {
    method: "POST",
    headers,
    body: new URLSearchParams({ ...data, username: data.email }),
    credentials: "include"
  });

  if (response.ok) {
    return {
      access_token: await response.json()
    };
  } else {
    return null;
  }
}
