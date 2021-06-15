import React from "react";
import EventBox from './eventBox';
import img from '../../assets/images/bak2.jpg';

class eventComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event:{
        eventId:"1",
        name:"Apr FC ft Rayon Sport",
        host: "Apr",
        ticketleft:100,
        timehours:3.6,
        image:img
      },
      price: {
        vvip:10000,
        vip:5000,
        common:3000
      },
    };
  }
  render() {
    return (
      <section className="section gb nopadtop">
        <div className="container">
          <div className="search-event-box">
            <div>
              <h3>Upcoming Events Soon</h3>
              <p />
            </div>
          </div>
          {}
          <div className="boxed boxedp4">
            <div className="shop-top">
              <div id="ticket-information" className="blog-grid shop-grid">
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src={img}
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
                          Brown leather bag
                        </a>
                      </h4>
                    </div>
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                </div>
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
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
                          Long coat jacket
                        </a>
                      </h4>
                    </div>
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Night blue sapphire{" "}
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Long white sweater
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Style own glasses
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Black men's shoes
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/bak2.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Printed white t-shirt
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <div>
                  <div className="event-box shop-wrapper">
                    <div className="image-wrap entry">
                      <img
                        src="../assets/images/eve1.jpg"
                        alt
                        className="img-responsive"
                      />
                      <div className="magnifier">
                        <a href="single-event.html" title>
                          <i className="flaticon-add" />
                        </a>
                      </div>
                    </div>
                    {}
                    <div className="event-details shop-box text-center">
                      <h4>
                        <a href="#" title>
                          Night blue sapphire{" "}
                        </a>
                      </h4>
                    </div>
                    {}
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By 250Bar&Restourent</a>
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
                                <i className="fa fa-user" /> 41
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-clock-o" /> 33 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        {}
                        <div className="pull-right">
                          <div className="dropup">
                            <a className="dropbtn">Price</a>
                            <div className="dropup-content">
                              <a>VVIP@20000</a>
                              <a>VIP@10000</a>
                              <a>Common@5000</a>
                              <a>Table@200000</a>
                            </div>
                          </div>
                        </div>
                        {}
                      </div>
                    </div>
                    {}
                  </div>
                  {}
                </div>
                {}
                <EventBox eventData={this.state} image={this.state.event.image}/>
                <div className="row text-center"></div>
                {}
              </div>
            </div>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default eventComponents;
