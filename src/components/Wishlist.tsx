import React, { useState, useEffect } from 'react';
import BookService, { Book, WishlistItem } from "../services/BookService";
import '../styles/Wishlist.scss';

function Wishlist() {
    const [wishlist, setWishlist] = useState<Book[]>([]);
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
        fetchWishlist();
    }, [token]);

    const fetchWishlist = async () => {
        try {
            const response = await BookService.getWishlistItems(token);
            const data: WishlistItem[] = Array.isArray(response.result) ? response.result : [];
            const books: Book[] = data.map(item => item.product_id);
            setWishlist(books);
        } catch (error) {
            console.error("Failed to fetch wishlist", error);
        }
    };

    return (
        <div className="wishlist-container">
            {wishlist.map(book => (
                <div key={book._id} className="wishlist-item">
                    <div className="wishlist-item__image">
                        <img
                            src={book.bookImage ? `path/to/images/${book.bookImage}` : 'path/to/placeholder.png'}
                            alt={book.bookName}
                        />
                    </div>
                    <div className="wishlist-item__details">
                        <h3>{book.bookName}</h3>
                        <p>by {book.author}</p>
                        <p className="price">
                            Rs. {book.discountPrice} <span className="original-price">Rs. {book.price}</span>
                        </p>
                    </div>
                    <div className="wishlist-item__actions">
                        <button>🗑</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;
