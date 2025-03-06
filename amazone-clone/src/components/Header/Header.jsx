import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import logo from "../../assets/images/icons/amazon_PNG11.png";
import flag from "../../assets/images/icons/usa-31021_640.png";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  return (
    <>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* Logo */}
          <Link rel="stylesheet" to="/">
            <img src={logo} alt=" Amazon logo" />
          </Link>
        </div>
        {/* Delivery */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to Eagan 55068</p>
            <span> Update Location</span>
          </div>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          <FaSearch size={25} />
        </div>
        {/* right side a */}
        <div className={classes.order__container}>
          <Link to="" className={classes.language}>
            <img src={flag} alt=" USA flag" />
            <select name="" id>
              <option value="">EN</option>
            </select>
          </Link>
          {/*  Three a components */}
          <Link to="/auth">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* orders */}
          <Link to="/orders ">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{basket.length}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
