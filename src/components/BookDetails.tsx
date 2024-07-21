import book1 from "./../assets/images/book1.jpg";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./../styles/BookDetails.scss";

const BookDetails = () => {
  return (

        <div className="container">
    <div style={{paddingLeft:'5%'}}>Home/Book(01)</div>
    <div className="detailscontainer">
       
      
          <div className="miniImg">
          <img src={book1} alt="Book Cover" />
          <img src={book1} alt="Book Cover" />
        </div>
      <div className="leftdetailsContainer">
    
        <div className="frontPageSection">
          <div className="frontPage">
            <img src={book1} alt="Book Cover" />
          </div>
          <div className="frontpagebtn">
            <button className="addtobag"> ADD TO BAG</button>
            <button className="wishlist"> WISHLIST</button>
          </div>
        </div>
      </div>

      <div className="rightContainer">
        <div className="rightsidedetailsContainer">
          <div className="detailpgbookName">Don't Make Me Think</div>
          <div className="detailpgbookAuthor">by Steve Krug</div>
          <div className="detailpgbookRate">
            <div className="detailpgbookRating">
              <span>4.5</span> <StarIcon fontSize="small"  /> 
            </div>
            <div className="detailpgbookCount">(20)</div>
          </div>
          <div className="detailpgbookPrice">
            <div className="detailpgofferPrice">Rs.1500</div>
            <div className="detailpgoriginalPrice">Rs.2000</div>
          </div>
        </div>

        <div className="bookdetailspara">
          <span className="heading">Book Details:</span>
          <p className="para">
            Since Don’t Make Me Think was first published in 2000, hundreds of
            thousands of Web designers and developers have relied on usability
            guru Steve Krug’s guide to help them understand the principles of
            intuitive navigation and information design. Witty, commonsensical,
            and eminently practical, it’s one of the best-loved and most
            recommended books on the subject.
          </p>
        </div>
        <div className="customerFeedback">
          <h3>Customer Feedback</h3>
          <h4>Overall rating</h4>
          <StarBorderIcon className="starIcon" />
          <StarBorderIcon className="starIcon" />
          <StarBorderIcon className="starIcon" />
          <StarBorderIcon className="starIcon" />
          <StarBorderIcon className="starIcon" />
          <input type="text" placeholder="write your review" />
        </div>
      </div>
    </div>

    </div>
  );
};

export default BookDetails;