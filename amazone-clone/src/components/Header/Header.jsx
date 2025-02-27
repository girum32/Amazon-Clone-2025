import React from "react";
import classes from "./Header.module.css";

import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import logo from "../../assets/images/icons/amazon_PNG11.png";
import flag from "../../assets/images/icons/usa-31021_640.png";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          {/* Logo */}
          <a rel="stylesheet" href="">
            <img src={logo} alt=" Amazon logo" />
          </a>
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
          <a href="" className={classes.language}>
            <img src={flag} alt=" USA flag" />
            <select name="" id>
              <option value="">EN</option>
            </select>
          </a>
          {/*  Three a components */}
          <a href=" ">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </a>
          {/* orders */}
          <a href=" ">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/* Cart */}
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header;
