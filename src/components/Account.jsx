import { useEffect, useState } from "react";
import { fetchSingleUser } from "../api";
import { useNavigate } from "react-router-dom";

const Account = ({ token, onLogout, user, setUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchSingleUser(token);

        setUser(userData);
      } catch (error) {
        console.error("Error Setting User", error);
      }
    };
    if (token) {
      fetchUser();
    }
  }, [token, setUser]);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name.firstname}'s Account</h1>
          <p>Shipping Info: </p>
          <p>
            Street Address: {user.address.number} {user.address.street}
          </p>
          <button onClick={onLogout}>Log Out</button>
        </>
      ) : (
        <div>
          <h2>Not Signed In!</h2>
          <button onClick={handleClick}>Log In</button>
        </div>
      )}
    </div>
  );
};

export default Account;
