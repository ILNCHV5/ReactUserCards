export async function fetchUserData() {
  const userData = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await userData.json();
  return json;
};