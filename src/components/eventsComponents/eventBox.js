import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

class eventBox extends React.Component {
  render() {
    return (
      <Link to={
             {     
               pathname: '/event',
               state:this.props,
               search:"eventId=1",
              }
        }>
        <div className="event-box shop-wrapper">
          <div className="image-wrap entry">
            <img
              src={this.props.eventData.event.image}
              alt
              className="img-responsive"
            />
            <div className="magnifier">
              <a href="single-event.html" title>
                <i className="flaticon-add" />
              </a>
            </div>
          </div>
          <div className="event-details shop-box text-center">
            <h4>
              <a href="#" title>
                {this.props.eventData.event.name}
              </a>
            </h4>
          </div>
          <div className="event-footer">
            <div className="clearfix">
              <a>Posted By {this.props.eventData.event.host}</a>
            </div>
            <legend
              style={{
                margin: "2px"
              }}
            />
            <div className="clearfix">
              <div className="pull-left">
                <ul className="list-inline">
                  <li>
                    <a>
                      <FaUser className="fa fa-user" /> {this.props.eventData.event.ticketleft}
                    </a>
                  </li>
                  <li>
                    <a>
                      <FaClock className="fa fa-clock-o" /> {this.props.eventData.event.time} Min.
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="pull-right">
                <div className="dropup">
                  <a className="dropbtn">Price</a>
                  <div className="dropup-content">
                    {
                      Object.keys(this.props.eventData.price).map((e, i) => {
                        return <a key={i}>{e}@{this.props.eventData.price[e]}</a>
                      })
                    }
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </Link>
    );
  }
}

export default eventBox;
