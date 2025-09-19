// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// type Book = {
//   key: string;
//   title: string;
// };

// export default function Home() {
//   const [jsBooks, setJsBooks] = useState<Book[]>([]);
//   const [pyBooks, setPyBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch JavaScript books using fetch
//     fetch("https://openlibrary.org/search.json?q=javascript")
//       .then(res => res.json())
//       .then(data => setJsBooks(data.docs))
//       .catch(() => setError("Error loading JavaScript books"));

//     // Fetch Python books using axios
//     axios
//       .get("https://openlibrary.org/search.json?q=python")
//       .then(res => setPyBooks(res.data.docs))
//       .catch(() => setError("Error loading Python books"))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading books... 📖</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div style={{ padding: "2rem", display: "grid", gap: "2rem" }}>
//       <section>
//         <h2>JavaScript Books 📚</h2>
//         {jsBooks.map(book => (
//           <Link key={book.key} to={`/book${book.key}`}>
//             <p style={{ cursor: "pointer", color: "teal" }}>{book.title}</p>
//           </Link>
//         ))}
//       </section>
//       <section>
//         <h2>Python Books 🐍</h2>
//         {pyBooks.map(book => (
//           <Link key={book.key} to={`/book${book.key}`}>
//             <p style={{ cursor: "pointer", color: "purple" }}>{book.title}</p>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
//https://openlibrary.org/search.json?q=javascript

type Book = {
  key?: string;
  title?: string;
  author_name?:string;
  edition_count?:string;
  cover_i?:string;
} ;
const HomePage = () =>{
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/search.json?q=javascript`)
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error("failed to fetch data");
      return res.json();
    })

    .then((data) => setBooks(data.docs))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
  },[]);
  return (
  <>
    {loading && <p>loading....</p>}
    {error && <p>{error}</p>}
     <h1 className=" pt-50 text-5xl text-center text-green-900">Our Products</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-20">
    {!loading && 
      !error &&
      books.slice(0,10).map((book) => (
        <div key={book.key} className="p-5 bg-green-400 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ">
          <img 
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/50x70?text=No+Cover"
           }
             alt={book.title} 
            />
                <h1 className="text-2xl font-bold">{book.title}</h1>

                <p> <span className="text-m font-bold">Edition:</span> {book.edition_count}</p>

                <p><span className="text-m font-bold">Author:</span> {book.author_name}</p>

        </div>
      ))}
  </div>
  </>
  );
};
export default HomePage