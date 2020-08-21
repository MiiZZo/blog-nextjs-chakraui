export const getUsers = async () => {
  const response = await fetch(`${process.env.API_URL}/users`);

  if (response.ok) {
    return await response.json();
  }

  return null;
};
