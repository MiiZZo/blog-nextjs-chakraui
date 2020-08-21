export const updateTokens = async (): Promise<{ token: string } | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/update-tokens`, {
      method: "POST",
      mode: "cors",
      credentials: "include"
    });

    if (response.ok) {
      const json = await response.json();

      return {
        token: json
      };
    }

    return null;
  } catch (e) {
    console.log(e);
  }
};
