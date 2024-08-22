import "./item.css";

export default function TodoItem(data) {
  return (
    <div className="card">
      <h2 className="card-title">{data.title}</h2>
      <p className="card-description">{data.description}</p>
      <button className="card-button">Action</button>
    </div>
  );
}
