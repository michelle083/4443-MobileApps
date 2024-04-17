// Import the necessary libraries
import fetch from 'node-fetch';

// Login user
export const loginUser = async (username, password) => {
  const response = await fetch('http://161.35.231.247:8084/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

// Register user
export const registerUser = async (username, password) => {
  const response = await fetch('http://161.35.231.247:8084/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
};

// Delete user
export const deleteUser = async (username) => {
  const response = await fetch(`http://161.35.231.247:8084/delete/${username}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Deletion failed');
  }

  return response.json();
};

// Search for candies based on a keyword in the name
export const searchCandiesByName = async (keyword) => {
    const response = await fetch(`http://161.35.231.247:8084/candies/name/${keyword}`);
    const data = await response.json();
    return data;
  };