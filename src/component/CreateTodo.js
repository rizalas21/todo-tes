import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!todo || todo.length <= 1) {
      return navigate("/");
    }
    try {
      const addingTodo = await axios.post("http://localhost:8080/checklist", {
        name: todo,
      });
      const todoId = addingTodo.data.id;
      if (item || item.length > 1) {
        await axios.post(`http://localhost:8080/checklist/${todoId}/item`, {
          name: item,
        });
      }
      setTodo("");
      setItem("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-edit">
      <h1>Adding Todo</h1>
      <form className="form-edit" onSubmit={handlerSubmit}>
        <div className="inline-edit">
          <p>Todo Name</p>
          <input
            className="input-edit"
            type="text"
            name="TodoName"
            id="TodoName-edit"
            onInput={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="inline-edit">
          <p>Item Todo</p>
          <input
            className="input-edit"
            type="text"
            name="title"
            id="title-edit"
            onInput={(e) => setItem(e.target.value)}
          />
        </div>

        <div className="save-cancel-edit">
          <div className="button-save">
            <button type="submit" className="btn btn-primary">
              <p>Close</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
