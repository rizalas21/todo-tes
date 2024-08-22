import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ registerUser }) {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();

  function handlerSubmit() {
    registerUser(data);
    navigate("/login");
  }

  return (
    <div class="form-container">
      <form onSubmit={handlerSubmit}>
        <h1>Register</h1>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          onInput={(e) => setData({ ...data, username: e.target.value })}
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          required
          onInput={(e) => setData({ ...data, email: e.target.value })}
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
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
