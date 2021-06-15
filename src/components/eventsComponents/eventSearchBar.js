import React from "react";
import { FaSearch } from "react-icons/fa";

class eventSearchBar extends React.Component {
  render() {
    return (
      <section className="ticket-nav clearfix">
        <ul className="topnav pull-left">
          <li>
            <a className="active" href="#">
              All Event
            </a>
          </li>
          <li>
            <a href="#">Music Concert</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Fashion</a>
          </li>
        </ul>
        <div className=" pull-right">
          <form className="search-form">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <FaSearch className="fa fa-search" />
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default eventSearchBar;
