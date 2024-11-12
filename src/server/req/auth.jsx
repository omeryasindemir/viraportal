import baseUrl from "../env"

// GET EXAMPLE
// export const getPosts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);
//     if (!response.ok) {
//       throw new Error('Veri alınamadı');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("GET posts hatası:", error);
//     throw error;
//   }
// };

// Register
export const authRegister = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error!');
    }
    return await response.json();
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
};

// Login
export const authLogin = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error!');
    }
    return await response.json();
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
};