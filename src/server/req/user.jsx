import authToken from "../authToken";
import baseUrl from "../env"

// User Manage
export const userManage = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/users/me/manage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': localStorage.getItem(authToken),
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