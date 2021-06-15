import React from "react";
import { Link } from "react-router-dom";

class toptitle extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="tagline-message page-title text-center">
            <h3>Events</h3>
            <ul className="breadcrumb">
              <li>
                <Link to="/" >Intercore</Link>
              </li>
              <li className="active"><Link to="/events">{this.props.last}</Link></li>
            </ul>
          </div>
        </div>
        {}
      </section>
    );
  }
}

export default toptitle;
