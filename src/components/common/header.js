import React from "react";
import { FaFacebook,FaTwitter,FaPhone, FaEnvelope,FaInstagram, FaLinkedin, FaAngleDown} from 'react-icons/fa'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';


class header extends React.Component {
  render() {
    return (
      <div id="wrapper">
        
      <header className="header" style={{backgroundColor: "#0873bb"}}>
        <div
          className="topbar clearfix"
          style={{
            backgroundColor: "#0873bb"
          }}
        >
          <div className="container">
            <div className="row-fluid">
              <div
                className="col-md-6 col-sm-6 text-left"
                style={{
                  backgroundColor: "#0873bb"
                }}
              >
                <p>
                  <strong>
                    <FaPhone className="fa fa-phone"/>
                  </strong>{" "}
                  +250781182427   
                  <strong>
                    <FaEnvelope className="fa fa-envelope"/>
                  </strong>{" "}
                  <a href="mailto:intercoregroup@gmail.com">
                    intercoregroup@gmail.com
                  </a>
                </p>
              </div>
              {}
              <div className="col-md-6 col-sm-6 hidden-xs text-right">
                <div className="social">
                  <a
                    className="facebook"
                    href="#"
                    data-tooltip="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  >
                    <FaFacebook className="fa fa-facebook"/>
                  </a>
                  <a
                    className="twitter"
                    href="#"
                    data-tooltip="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  >
                    <FaTwitter className="fa fa-twitter"/>
                  </a>
                  <a
                    className="linkedin"
                    href="#"
                    data-tooltip="tooltip"
                    data-placement="bottom"
                    title="Linkedin"
                  >
                    <FaLinkedin className="fa fa-linkedin"/>
                  </a>
                                    <a
                    className="instagram"
                    href="#"
                    data-tooltip="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <FaInstagram className="fa fa-instagram" />
                  </a>
                </div>
                {}
              </div>
              {}
            </div>
            {}
          </div>
          {}
        </div>
        {}
        <div className="container">
          <nav className="navbar navbar-default yamm">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="logo-normal-img">
                <Link to="/" className="navbar-brand-img" >
                  <img
                    src={logo}
                    alt="Intercore Logo"
                    width="50px"
                    height="50px"
                  />
                </Link>
              </div>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="dropdown yamm-fw yamm-half">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle active"
                  >
                    live stream <FaAngleDown className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="yamm-content clearfix">
                        <div className="row-fluid">
                          <div className="col-md-6 col-sm-6">
                            <ul>
                              <li>
                                <Link to="/live"
                                  style={{
                                    whiteSpace: "nowrap"
                                  }}
                                >
                                  Music Concert
                                </Link>
                              </li>
                              <li>
                                <Link to="/live">Sport </Link>
                              </li>
                              <li>
                                <Link to="/live">Fashion</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li></li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li className="dropdown yamm-fw yamm-half">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle active"
                  >
                    Join us <FaAngleDown className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="yamm-content clearfix">
                        <div className="row-fluid">
                          <div className="col-md-6 col-sm-6">
                            <ul>
                              <li>
                                <Link
                                  style={{
                                    whiteSpace: "nowrap"
                                  }}
                                  to="/signup/individual"
                                >
                                  Join as individual{" "}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  style={{
                                    whiteSpace: "nowrap"
                                  }}
                                  to="/signup/organisation"
                                >
                                  Join as Organisation{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                              <li hidden>
                                <Link to="/logout">Logout</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          {}
        </div>
        {}
      </header>
      </div>
    );
  }
}

export default header;
