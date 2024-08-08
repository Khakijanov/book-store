"use client";
import { useEffect, useState } from "react"; // Bir marta import qilish kifoya

export default function Books() {
  // Komponent nomi "Books" qilib o'zgartirilgan
  const [books, setBooks] = useState([]);

  // Kitoblarni olish uchun fetch qilish
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:4000/books");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", err);
      }
    };

    fetchBooks();
  }, []); // Bu yerda [] bilan useEffect ichida fetchBooks faqat bir marta ishlaydi

  return (
    <div className="container">
      <div className="mt-20 container flex flex-wrap justify-between items-center">
        {books.map((book) => (
          <div
            key={book.id}
            className="h-[300px] card card-compact border-2 bg-base-100 w-[22%] shadow-xl"
          >
            <figure>
              <img width={100} src={book.photo} alt={book.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p>{book.author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
