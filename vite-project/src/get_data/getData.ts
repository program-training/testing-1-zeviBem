export async function fetchUserData(userId: number) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      throw error;
    }
  }