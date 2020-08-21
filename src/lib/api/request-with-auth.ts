import { updateTokens } from "./auth/updateTokens";

export const requestWithAuth = async <T, R>(
  input: RequestInfo,
  method: RequestInit["method"],
  body: T | null = null,
  token: string
): Promise<{ newToken: string | null; result: R }> => {
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${token}`);

  const init: RequestInit = {
    mode: "cors",
    credentials: "include",
    method,
    headers
  };

  if (body !== null) {
    headers.set("Content-Type", "application/json");
    init.body = JSON.stringify(body);
  }

  const response = await fetch(input, init);

  if (response.status === 401) {
    const updateTokensResult = await updateTokens();

    if (!updateTokensResult) {
      return null;
    }

    const reresponse = await fetch(input, init);

    if (reresponse.ok) {
      return {
        result: await reresponse.json(),
        newToken: updateTokensResult.token
      };
    }
  }

  if (response.ok) {
    return {
      newToken: null,
      result: await response.json()
    };
  }

  return null;
};
