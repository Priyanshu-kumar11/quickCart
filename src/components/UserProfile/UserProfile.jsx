import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To access URL parameters
import axios from 'axios'; // For making API calls
import './UserProfile.css';

const UserProfile = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch user data based on ID
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data); // Store the user data
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError("Error fetching user data.",error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [id]); // Re-fetch data if the 'id' changes

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default UserProfile;
