import authToken from "../authToken";
import baseUrl from "../env"


// Send Message
export const chatSend = async (data, userID) => {
  try {
    const response = await fetch(`${baseUrl}/chat/${userID}`, {
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