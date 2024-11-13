import authToken from "../authToken";
import baseUrl from "../env"

// Auth
export const authMe = async () => {
  console.log(localStorage.getItem(authToken))
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': localStorage.getItem(authToken),
      },
      credentials: 'include'
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


// Logout
export const authLogout = async () => {
  try {
    const response = await fetch(`${baseUrl}/auth/logout`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': localStorage.getItem(authToken),
      },
      credentials: 'include'
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




// Other User Details
export const authOtherUserDetails = async (otherUsername) => {
  try {
    const response = await fetch(`${baseUrl}/users/@${otherUsername}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'csrf-token': localStorage.getItem(authToken),
      },
      credentials: 'include'
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