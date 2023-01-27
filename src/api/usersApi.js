async function fetchUserData() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users');
    return userData.json();
  };

export default fetchUserData;