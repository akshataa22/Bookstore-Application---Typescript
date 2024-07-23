import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import BookService,{Book} from "../services/BookService";
import '../styles/Dashboard.scss'

function Dashboard() {
    const [books, setBooks] = useState<Book[]>([]);
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
        fetchBooks();
      }, [token]);

    const fetchBooks = async () => {
        const response = await BookService.getBooks(token);
        const data: Book[] = Array.isArray(response.result)
          ? response.result
          : [];
        setBooks(data);
      };

  return (
    <>
    <div className="above-dashboard">
      <h6>Books <span>(128items)</span></h6> 
     <div className="dashboard-container">
      
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
    </div>
    </>

  );
}

export default Dashboard;