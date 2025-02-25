import React from "react";
import classes from "./Header.module.css";

import { SlLocationPin } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import logo from "../../assets/images/icons/amazon_PNG11.png";
import flag from "../../assets/images/icons/usa-31021_640.png";

function Header() {
  return (
    <>
      <section className={classes.header__container}>
        <div >
          {/* Logo */}
          <a rel="stylesheet" href="">
            <img src={logo} alt=" amazon logo" />
          </a>
          {/* Delivery */}
          <span>
            <div>
              <p>Deliver to</p>
              <span>
                <SlLocationPin />
              </span>
            </div>
          </span>
        </div>
        <div>
          {/* Search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search product" />
          <FaSearch />
        </div>
        <div>
          {/* right side a */}
          <div>
            <img src={flag} alt=" USA flag" />
            <section>
              <option value="">EN</option>
            </section>
          </div>
          {/*  Three a components */}
          <a href=" ">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href=" ">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* Cart */}
          <a>
            <BiCart />
            <span>0</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
