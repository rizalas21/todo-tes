import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import { useEffect } from "react";
import "./item.css";

export default function TodoBox({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authorization");

    // Jika tidak ada token, navigasikan ke login dan atur isLoggedIn menjadi false
    if (!token) {
      setIsLoggedIn(false); // Ubah ke false
      navigate("/login");
    } else {
      setIsLoggedIn(true); // Ubah ke true jika token ada
    }
  }, [setIsLoggedIn, navigate]);

  if (isLoggedIn) {
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Cari tugas..."
          />
        </div>
        <TodoList />
      </>
    );
  }

  return null;
}
