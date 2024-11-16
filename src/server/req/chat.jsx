import authToken from "../authToken";
import baseUrl from "../env"


// Send Message
export const chatSend = async (data, userId) => {
    console.log(data)
    try {
        const response = await fetch(`${baseUrl}/chat/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'csrf-token': localStorage.getItem(authToken),
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


// Get Messages
export const chatGet = async (userId) => {
    try {
        const response = await fetch(`${baseUrl}/chat/${userId}`, {
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