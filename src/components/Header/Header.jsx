import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(result =>{})
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <form className="search">
        <input type="text" name="search" id="search" />
        <input type="submit" value="Search" />
      </form>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && <button className="btn-logout" onClick={handleSignOut}>Sign Out</button>}
      </div>
    </nav>
  );
};

export default Header;
