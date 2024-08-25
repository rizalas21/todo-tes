import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import TodoBox from "./component/TodoBox";
import Register from "./component/auth/Register";
import CreateTodo from "./component/CreateTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoBox />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AddTodo" element={<CreateTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
