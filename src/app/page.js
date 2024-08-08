"use client";

import next from "next";

const getData = async () => {
  const request = await fetch("http://localhost:4000/books", {
    next: {
      revalidate: 0,
    },
  });

  const data = await request.json();

  return data; // Obyekt emas, massivni qaytarish kerak
};

async function Home() {
  const books = await getData(); // 'data' o'rniga 'books' deb nomlash osonroq

  return (
    <div className="container">
      <div className="mt-20 container flex flex-wrap justify-between items-center ">
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

export default Home;
