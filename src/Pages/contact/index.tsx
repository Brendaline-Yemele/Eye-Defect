// 

// Pages/contact/Contact.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Book = {
  key?: string;
  title?: string;
  description?: string;
  cover_i?: number;
  author_name?:string;
  edition_count?:string;
};

const Contact = () => {
  const [jsBooks, setJsBooks] = useState<Book[]>([]);
  const [pyBooks, setPyBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJSBooks = async () => {
      try {
        const res = await fetch("https://openlibrary.org/search.json?q=javascript");
        const data = await res.json();
        setJsBooks(data.docs);
      } catch {
        setError("Failed to fetch JavaScript books.");
      }
    };

    const fetchPythonBooks = async () => {
      try {
        const res = await axios.get("https://openlibrary.org/search.json?q=python");
        setPyBooks(res.data.docs);
        
      } catch {
        setError("Failed to fetch Python books.");
      }
    };

    Promise.all([fetchJSBooks(), fetchPythonBooks()]).finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  const renderBooks = (books: Book[], label: string) => (
    <div>
      <h2 className='pt-40 text-5xl text-center text-green-900'>{label}</h2>
     <p>{label}</p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 p-20'>
        {books.slice(0,12).map((book) => (
          <div key={book.key} className='p-5 bg-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300' >
            <Link to={`/book/${book.key}`}>
              <h3 className='text-2xl  text-center text-white bg-green-800'>{book.title}</h3>
            </Link>
             
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
               
              />
              
            )}
            <p> <span className="text-xl font-bold">Edition:</span> {book.edition_count}</p>
             <p> <span className='text-xl font-bold'>Author:</span>{book.author_name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: '1rem' }}>
      
      {renderBooks(jsBooks, "JavaScript Books")}
      {renderBooks(pyBooks, "Python Books")}
    </div>
  );
};

export default Contact;
