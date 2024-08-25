import axios from "axios";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/checklist", {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        setTodos(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          navigate("/login");
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-items">
      <button onClick={() => navigate("/addTodo")}>Add Todo</button>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
}
