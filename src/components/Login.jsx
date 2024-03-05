import { useState } from "react";
import { fetchSingleUser, fetchUserLogin } from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Please fill out both fields!");
      return;
    }

    try {
      const user = await fetchUserLogin(username, password);

      if (user && user.token) {
        setToken(user.token);
        setPassword("");
        navigate("/account");

        fetchSingleUser()
          .then((userData) => {
            setUser(userData);
          })
          .catch((error) => {
            console.error("Error fetching user data!", error);
          });
      } else {
        setErrorMessage("wrong email or password!");
      }
    } catch (error) {
      if (error.message === "Login failed") {
        setErrorMessage("Invalid email or password");
      } else {
        setErrorMessage("Login failed. Try again later.");
      }
      console.error("Login failed", error);
    }
  };

  return (
    <div className="Login">
      <h2>Have an Account with us? Log In!</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <input
            className="password-text"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
