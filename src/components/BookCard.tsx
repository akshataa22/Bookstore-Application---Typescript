import { useNavigate } from 'react-router-dom';
import "./../styles/BookCard.scss";
import StarIcon from '@mui/icons-material/Star';
import { Book } from "../services/BookService";
import book1 from './../assets/images/book1.jpg'
import book2 from './../assets/images/book2.jpg';
import book3 from './../assets/images/book3.jpg';
import book4 from './../assets/images/book4.jpg';
import book5 from './../assets/images/book5.png';
import book6 from './../assets/images/book6.jpg';
import book7 from './../assets/images/book7.jpg';


interface BookCardProps {
    book: Book;
}

const bookImageMapping: { [key: string]: string } = {
    "The 5 AM Club": book2,
    "The India Story": book3,
    "Fear Not Strong": book4,
    "The lord of the Rings": book5,
    "Iron Man: Extremis": book2,
    "Spider Man" : book6,
    "Group Discussion" : book1,
    "The Hobbit 2" : book7,
};


function BookCard({ book }: BookCardProps) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/details');
    };

    const bookImage = bookImageMapping[book.bookName] || 'book-cover.jpg';

    return (
        <div className="bookCard" onClick={handleCardClick}>
            <div className="imgSection">
            <img src={bookImage} alt="Book Cover" />
            </div>
            <div className='bookInformation'>
                <div className='bookName'>{book.bookName}</div>
                <div className='bookAuthor'>by {book.author}</div>
                <div className='bookRate'>
                    <div className='bookRating'>4.5 <StarIcon className="starIcon" fontSize='small' /></div>
                    <div className='bookCount'>(20)</div>
                </div>
                <div className='bookPrice'>
                    <span className='offerPrice'>Rs.{book.discountPrice}</span>
                    <span className='originalPrice'>Rs.{book.price}</span>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
