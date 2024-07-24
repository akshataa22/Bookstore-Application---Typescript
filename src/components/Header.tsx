import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "./../assets/images/logo.png";
import search from "./../assets/images/search.png";
import "./../styles/Header.scss";

function Header() {
  const [showUserCard, setShowUserCard] = useState(false);
  const navigate = useNavigate();

  const toggleUserCard = () => {
    setShowUserCard((prevState) => !prevState);
  };

  const handleCartClick = () => {
    setShowUserCard(false);
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    setShowUserCard(false);
    navigate("/wishlist");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !event.target ||
      (!(event.target as HTMLElement).closest(".user-card") &&
        !(event.target as HTMLElement).closest(".profile"))
    ) {
      setShowUserCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
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
            <Tooltip title="Profile">
              <PersonOutlineOutlinedIcon
                className="profile"
                fontSize="medium"
                style={{ cursor: "pointer", color: "white" }}
                onClick={toggleUserCard}
              />
            </Tooltip>
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
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                  <span style={{ marginLeft: "2%" }}>My Wishlist</span>
                </button>
                <button type="button" onClick={handleLogout} className="logoutbtn"> Logout</button>
              </div>
            </div>
          )}
          <div className="addCart">
            <Tooltip title="Cart">
              <ShoppingCartOutlinedIcon
                onClick={handleCartClick}
                className="cart"
                style={{ cursor: "pointer", color: "white" }}
                fontSize="medium"
              />
            </Tooltip>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </header>
  );
};

export default Header;
