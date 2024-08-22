import axios from "axios";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyData = [
    {
      id: 1,
      title: "Belajar React",
      description: "Mempelajari dasar-dasar React dan cara membuat komponen.",
      executor: "Andi Setiawan",
    },
    {
      id: 2,
      title: "Membuat Aplikasi To-Do List",
      description: "Mengembangkan aplikasi To-Do List menggunakan React.",
      executor: "Budi Santoso",
    },
    {
      id: 3,
      title: "Menyelesaikan Proyek Akhir",
      description: "Menyelesaikan proyek akhir untuk bootcamp.",
      executor: "Siti Rahmawati",
    },
    {
      id: 4,
      title: "Membaca Buku Pemrograman",
      description:
        "Membaca buku tentang pemrograman modern dan best practices.",
      executor: "Dewi Lestari",
    },
    {
      id: 5,
      title: "Berolahraga",
      description: "Melakukan latihan fisik untuk kesehatan.",
      executor: "Rudi Hartono",
    },
  ];

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "http://94.74.86.174:8080/api/checklist",
          {
            headers: {
              Authorization: localStorage.getItem("authorization"),
            },
          }
        );
        setTodos(response.data); // Ganti data sesuai struktur respons API Anda
      } catch (error) {
        console.error("Failed to load data => ", error);
        setTodos(dummyData); // Menampilkan dummy data jika gagal memuat data dari API
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Daftar Tugas:</p>
      {todos.length === 0 ? (
        <p>Tidak ada tugas yang ditemukan.</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} data={todo} />)
      )}
    </>
  );
}
