import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./second.css";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  async function handlerSubmit(e) {
    e.preventDefault();
    try {
      const login = await axios.post("http://localhost:8080/login", data);
      if (login.data.accessToken) {
        await localStorage.setItem(
          "accessToken",
          `Bearer ${login.data.accessToken}`
        );
        navigate("/");
      } else {
        console.log("error when login");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handlerSubmit}>
        <h1>Login</h1>
        <label>username</label>
        <input
          type="username"
          id="username"
          name="username"
          placeholder="input username here"
          required
          onInput={(e) => setData({ ...data, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          onInput={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
