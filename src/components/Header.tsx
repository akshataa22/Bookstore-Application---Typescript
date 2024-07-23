import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "./../assets/images/logo.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./../styles/Header.scss";
import search from '../assets/images/search.png'

const Header = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const navigate = useNavigate();

  const toggleUserCard = () => {
    setShowUserCard((prevState) => !prevState);
  };

  const handleCartClick = () => {
    navigate('/cart'); 
  };

  const handleHomeClick = () => {
    navigate('/home'); 
  };

  const handleWishlistClick = () => {
    navigate('/wishlist'); 
  };


  const handleLogout = async () => {
        localStorage.removeItem("token");
        navigate("/");
        console.log("Logout successful");
  };


  return (
    <header className="header">
      <div className="headercontainer">
        <div className="logo-container">
          <img
            src={logo}
            style={{ backgroundColor: "red" }}
            alt="bookLogo"
            className="logo"
            onClick={handleHomeClick}
          />
        </div>
        <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <img src={search} alt="search logo" id="search" />
      </div>

        <div className="icons">
          <div className="profile">
            <PersonOutlineOutlinedIcon
              className="profile"
              fontSize="medium"
              style={{ cursor: "pointer", color: "white" }}
              onClick={toggleUserCard}
            />
          </div>
          {showUserCard && (
            <div className="user-card">
              <div className="user-info">
                <p className="username">Hello, Akshata</p>
              </div>
              <div className="cartOptions">
                <button>
                  <PersonOutlineOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>Profile</span>
                </button>
                <button>
                  <ShoppingBagOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>My Orders</span>
                </button>
                <button onClick={handleWishlistClick}>
                  <FavoriteBorderOutlinedIcon fontSize="small" />{" "}
                  <span style={{ marginLeft: "2%" }}>My Wishlist</span>
                </button>
                <button type="button" onClick={handleLogout} className="logoutbtn"> Logout</button>
              </div>

            </div>
          )}
          <div className="addCart">
            <ShoppingCartOutlinedIcon
            onClick={handleCartClick}
              className="cart"
              style={{ cursor: "pointer", color: "white" }}
              fontSize="medium"
            />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </header>
  );
};

export default Header;