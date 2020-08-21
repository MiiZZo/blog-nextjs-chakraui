import { updateTokens } from "./updateTokens";

export async function pingAuth(
  access_token: string
): Promise<{
  access_token: string | null;
  auth: boolean;
}> {
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${access_token}`);

  try {
    const pingRefreshToken = await fetch(`${process.env.API_URL}/auth/ping`, {
      mode: "cors",
      credentials: "include",
      headers
    });

    if (pingRefreshToken.ok) {
      return {
        access_token: null,
        auth: true
      };
    }
  } catch (e) {
    console.log(e);
  }

  try {
    const res = await updateTokens();

    if (!res) {
      return {
        access_token: null,
        auth: false
      };
    }

    return {
      access_token: res.token,
      auth: true
    };
  } catch (e) {
    console.log(e);
  }

  return {
    access_token: null,
    auth: false
  };
}
