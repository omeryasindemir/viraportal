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

// User Manage Profile Picture
export const userManagePP = async (data) => {
  try {
    const response = await fetch(`${baseUrl}/users/me/manage/profilepicture`, {
      method: 'POST',
      headers: {
        'csrf-token': localStorage.getItem(authToken)
      },
      credentials: 'include',
      body: data,
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


// Total Users
export const usersTotal = async () => {
  try {
    const response = await fetch(`${baseUrl}/users/all?page=0`, {
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