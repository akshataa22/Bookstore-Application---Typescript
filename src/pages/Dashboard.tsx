import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import BookService,{Book} from "../services/BookService";
import '../styles/Dashboard.scss'
import Footer from "../components/Footer";

function Dashboard() {
    const [books, setBooks] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(12);
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

      const indexOfLastBook = currentPage * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    
      const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard-body">
    <header className="book">
        <h6>Books <span>({books.length} items)</span></h6>
      </header>
      <div className="above-dashboard">
      <div className="dashboard-container">
      
      {currentBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
    </div>
    <div className="pagination">
          {Array.from(
            { length: Math.ceil(books.length / booksPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;