import "./item.css";

const colors = [
  "#FF9AA2",
  "#FFB7B2",
  "#FFDAC1",
  "#E2F0CB",
  "#B5EAD7",
  "#C7CEEA",
];

export default function TodoItem({ todo }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="card" style={{ backgroundColor: randomColor }}>
      <h2 className="card-title">{todo.todo}</h2>
      <p className="card-description">{todo.item_name}</p>
      <button className="card-button">Action</button>
    </div>
  );
}
