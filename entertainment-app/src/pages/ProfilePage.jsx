import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile data on component mount
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/user",
          {
            withCredentials: true, // Send cookies with the request
          }
        );

        if (response.data.status) {
          setUser(response.data.user); // Set the authenticated user's data
        } else {
          // If user is not authenticated, redirect to login page
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfilePage;
