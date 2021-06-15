import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../styles/carousel.css';
import { FaClock, FaUser } from "react-icons/fa";
import Image1 from '../../assets/images/bak2.jpg';
import Image2 from '../../assets/images/eve1.jpg';
import Image3 from '../../assets/images/bak3.jpg';
import Image4 from '../../assets/images/bak2.jpg';
import { httpRequest } from "../../helpers/httpRequest";

class upcomingEvents extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    events:[]

  }
  componentDidMount() {
    this.getUpcommingEvents();
  }
  getUpcommingEvents = async() => {

    const { error, response } = await httpRequest('get', '/events?page=1&limit=1000&status=Pending');
    if(!error){
        const events = response.data.data.result;
        this.setState({events:events})
    }
  }


  render() {
    return (
      <section
        className="section gb"
        style={{
          padding: 0
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <p className="font-Sansation" id="somePeople">Upcoming Events Soon</p>
            <p />
          </div>
          { }
          <OwlCarousel items={3}
            className="owl-theme"
            loop={true}
            margin={10}
            nav={true}
            dots={false}
            autoplay={true}
            autoplayTimeout={4000}
            items={3}
            responsive={this.state.responsive} >
            {/* {this.state.events.forEach((e) => { */}
                <div className="caro-item">
                 
                  <div className="event-box">
                    <div className="image-wrap entry">
                      <img
                        src={Image4}
                        alt
                        className="img-responsive"
                      />
                    </div>
                    { }
                    <div className="event-details">
                      <h4>
                        <small>Boat kivu </small>
                        <a href="html/single-event.html" title>
                          Modern party in boat
                        </a>
                      </h4>
                      <p> come and we party</p>
                    </div>
                    { }
                    <div className="event-footer">
                      <div className="clearfix">
                        <a>Posted By APR FC Official</a>
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
                                <FaUser className="fa fa-user" /> 4000
                              </a>
                            </li>
                            <li>
                              <a>
                                <FaClock className="fa fa-clock-o" /> 90 Min.
                              </a>
                            </li>
                          </ul>
                        </div>
                        { }
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
                        { }
                      </div>
                    </div>
                    { }
                  </div>
                  { }
                  {/* {console.log(e.title)} */}
                </div>
               
            {/* })} */}
            {/* { }
            <div className="caro-item">
              <div className="event-box">
                <div className="image-wrap entry">
                  <img
                    src={Image3}
                    alt
                    className="img-responsive"
                  />
                </div>
                { }
                <div className="event-details">
                  <h4>
                    <small>Design</small>
                    <a href="html/single-event.html" title>
                      Designing Game UI Assets in Adobe Illustrator
                    </a>
                  </h4>
                  <p />
                </div>
                { }
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
                            <FaUser className="fa fa-user" /> 41
                          </a>
                        </li>
                        <li>
                          <a>
                            <FaClock className="fa fa-clock-o" /> 33 Min.
                          </a>
                        </li>
                      </ul>
                    </div>
                    { }
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
                    { }
                  </div>
                </div>
                { }
              </div>
              { }
            </div>
            { }
            <div className="caro-item">
              <div className="event-box">
                <div className="image-wrap entry">
                  <img
                    src={Image2}
                    alt
                    className="img-responsive"
                  />
                </div>
                { }
                <div className="event-details">
                  <h4>
                    <small>PHP Coding</small>
                    <a href="html/single-event.html" title>
                      How to Become a Web Developer: Learn PHP
                    </a>
                  </h4>
                  <p />
                </div>
                { }
                <div className="event-footer">
                  <div className="clearfix">
                    <a>Posted By Expo 2020</a>
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
                            <FaUser className="fa fa-user" /> 35
                          </a>
                        </li>
                        <li>
                          <a>
                            <FaClock className="fa fa-clock-o" /> 1 Hr.
                          </a>
                        </li>
                      </ul>
                    </div>
                    { }
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
                    { }
                  </div>
                </div>
                { }
              </div>
              { }
            </div>
            { }
            <div className="caro-item">
              <div className="event-box">
                <div className="image-wrap entry">
                  <img
                    src={Image3}
                    alt
                    className="img-responsive"
                  />
                </div>
                { }
                <div className="event-details">
                  <h4>
                    <small>PHP Coding</small>
                    <a href="html/single-event.html" title>
                      How to Build a Custom Theme for Drupal 8
                    </a>
                  </h4>
                  <p />
                </div>
                { }
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
                            <FaUser className="fa fa-user" /> 41
                          </a>
                        </li>
                        <li>
                          <a>
                            <FaClock className="fa fa-clock-o" /> 33 Min.
                          </a>
                        </li>
                      </ul>
                    </div>
                    { }
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
                    { }
                  </div>
                </div>
                { }
              </div>
              { }
            </div>
            { }
            <div className="caro-item">
              <div className="event-box">
                <div className="image-wrap entry">
                  <img
                    src={Image1}
                    alt
                    className="img-responsive"
                  />
                </div>
                { }
                <div className="event-details">
                  <h4>
                    <small>Javascript</small>
                    <a href="html/single-event.html" title>
                      Modern JavaScript Linting With ESLint
                    </a>
                  </h4>
                  <p />
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
                            <FaUser className="fa fa-user" /> 41
                          </a>
                        </li>
                        <li>
                          <a>
                            <FaClock className="fa fa-clock-o" /> 33 Min.
                          </a>
                        </li>
                      </ul>
                    </div>
                    { }
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
                    { }
                  </div>
                </div>
                { }
              </div>
            </div>
           */}
          </OwlCarousel>
          
          <hr className="invis" />
          <div
            className="section-button text-center"
            style={{
              marginBottom: "10px"
            }}
          >
            <a href="html/ticket.html" className="btn" type="button">
              View All Events
            </a>
          </div>
        </div>
        <di>
          Hello World
          {this.state.events.map(e=>{
            <li key={e.id}>{e.title}</li>
          })}
        </di>
      </section>
    );
  }
}

export default upcomingEvents;
