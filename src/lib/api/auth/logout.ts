export async function logout() {
  try {
    await fetch(`${process.env.API_URL}/auth/logout`, {
      mode: "cors",
      credentials: "include"
    });
  } catch (e) {
    console.log(e);
  }
}
