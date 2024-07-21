import { useNavigate } from 'react-router-dom';
import "./../styles/BookCard.scss";
import StarIcon from '@mui/icons-material/Star';
import book1 from './../assets/images/book1.jpg';

function BookCard() {
    const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/details');
  };
    return (
        <div className="bookCard" onClick={handleCardClick}>
            <div className="imgSection">
                <img src={book1} alt="Book Cover" />
            </div>
            <div className='bookInformation'>
            <div className='bookName'>Don't Make Me Think</div>
            <div className='bookAuthor'>by Steve Krug</div>
            <div className='bookRate'>
            <div className='bookRating'>4.5   <StarIcon className="starIcon" fontSize='small' /></div>
            <div className='bookCount'>(20)</div>
            </div>
            <div className='bookPrice'>
                <span className='offerPrice'>Rs.1500</span>
                <span className='originalPrice'>Rs.2000</span>
            </div>
            </div>
        </div>
    );
}

export default BookCard;