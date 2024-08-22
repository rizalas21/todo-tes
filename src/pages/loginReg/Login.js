import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./second.css";

export default function Login({ loginUser }) {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handlerSubmit() {
    loginUser(data);
    navigate("/");
  }

  return (
    <div class="form-container">
      <form onSubmit={handlerSubmit}>
        <h1>Login</h1>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          required
          onInput={(e) => setData({ ...data, username: e.target.value })}
        />
        <label for="password">Password</label>
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
