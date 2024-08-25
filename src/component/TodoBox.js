import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import "./item.css";
import { useEffect, useState } from "react";

export default function TodoBox() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    async function checkAuthentication() {
      const token = await localStorage.getItem("accessToken");
      console.log(token);
      if (!token) {
        navigate("/login");
        setIsloggedIn(false);
      }
      setIsloggedIn(true);
    }

    checkAuthentication();
  }, [navigate]);

  if (isLoggedIn === null) return null;
  return (
    <>
      {isLoggedIn && <TodoList />} {/* Render TodoList jika terautentikasi */}
    </>
  );
}
