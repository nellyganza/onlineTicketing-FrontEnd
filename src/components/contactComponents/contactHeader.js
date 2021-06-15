import React from "react";
import { Link } from "react-router-dom";

class contactHeader extends React.Component {
  render() {
    return (
      <section className="section lb p120">
        <div className="container">
          <div className="tagline-message page-title text-center">
            <h3>Get In Touch</h3>
            <ul className="breadcrumb">
              <li>
                <Link to="/" >Intercore</Link>
              </li>
              <li className="active"><Link to="/contactus">Get in touch</Link></li>
            </ul>
          </div>
        </div>
        {}
      </section>
    );
  }
}

export default contactHeader;
