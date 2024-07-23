import { useLocation } from 'react-router-dom';
import '../styles/BookDetails.scss';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookService from "../services/BookService";

function BookDetails() {
  const location = useLocation();
  const { book, bookImage } = location.state;
  const token = localStorage.getItem("token") || "";

  const addToCart = async () => {
        await BookService.addCartItem(token, book._id);
        alert("Book added to cart");
      } 


      const handleAddToWishlist = async () => {
        if (token) {
            try {
                await BookService.addToWishlist(token, book._id);
                alert("Book added to wishlist");
            } catch (error) {
                console.error("Failed to add to wishlist", error);
                alert("Failed to add to wishlist");
            }
        } else {
            alert("Please log in to add to wishlist");
        }
    };

    
  return (
    <div className="book-details">
      <div className="breadcrumb">Home / Book(01)</div>
      <div className="content">
        <div className="image-gallery">
          <img src={bookImage} alt="Book Cover" className="thumbnail" />
          <img src={bookImage} alt="Book Cover" className="thumbnail" />
        </div>
        <div className="main-image">
          <div className="book-image">
            <img src={bookImage} alt="Book Cover Main" />
          </div>
          <div className="wishlist">
              <button  className="cart-button" type='button' onClick={addToCart}>Add to Cart</button>
            
            <button className="wishlist-button" type="button" onClick={handleAddToWishlist}>WISHLIST</button>
          </div>
        </div>
        <div className="details">
          <h1>{book.bookName}</h1>
          <h2>by {book.author}</h2>
          <div className="rating">
            <div className="rate">
              4.5
              <StarBorderIcon fontSize="small" />
            </div>
            <span>(20)</span>
          </div>
          <div className="price">
            <span className="current-price">Rs.{book.discountPrice}</span>
            <span className="original-price">Rs.{book.price}</span>
          </div>
          <div className="book-detail">
            <h3>• Book Detail</h3>
            <p>{book.description}</p>
          </div>
          <div className="customer-feedback">
            <span>Customer Feedback</span>
            <div className="overall-rating">
              <span>Overall rating</span>
              <div className="stars">☆☆☆☆☆</div>
              <textarea placeholder="Write your review"></textarea>
              <button>Submit</button>
            </div>
            <div className="review">
              <div className="reviewer">AC</div>
              <div className="review-content">
                <div className="review-name">Akshata Dhanwade</div>
                <div className="review-stars">★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;