import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginReg/Login";
import { useState } from "react";
import axios from "axios";
import TodoBox from "./component/TodoBox";
import Register from "./pages/loginReg/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function loginUser(data) {
    // const response = await axios.post(
    //   "http://94.74.86.174:8080/api/login",
    //   data
    // );
    // if (response.status) {
    //   setIsLoggedIn(true);
    //   // localStorage.setItem("authorization", `Bearer ${response.data.token}`);
    //   localStorage.setItem("authorization", `Bearer audbfuw1928e71dsf`);
    // } else {
    //   setIsLoggedIn(false);
    // }
  }

  async function registerUser(data) {
    // const response = await axios.post(
    //   "http://94.74.86.174:8080/api/register",
    //   data
    // );
    // if (response) {
    //   setIsLoggedIn(true);
    // } else {
    //   setIsLoggedIn(false);
    // }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <TodoBox isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route
          path="/register"
          element={<Register registerUser={registerUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
