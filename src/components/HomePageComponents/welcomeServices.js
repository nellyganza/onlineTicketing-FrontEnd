import React from "react";
import { Animated } from "react-animated-css";
import ImageWel from '../../assets/images/8.png';

class welcomeServices extends React.Component {
  render() {
    return (
      <section
        className="section"
        style={{
          paddingBottom: 0
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 hidden-sm hidden-xs">
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div className="custom-module">
                  <img
                    src={ImageWel}
                    alt
                    className="img-responsive wow slideInLeft"
                  />
                </div>
              </Animated>
              { }
            </div>
            { }
            <div className="col-md-8">
              <div className="custom-module p40l">
                <h2>
                  We are a passionate Live stream from
                  <br />
                  Rwanda Do beautiful and easy-to-use digital <br />
                  design & Video coverage
                </h2>
                <p>
                  INTERCORE GROUP LTD founded in March 2017 by six associates
                  who know the management trade well because they all have the
                  experience is based general supply and events consultant,
                  company focused on providing high-quality service and customer
                  satisfaction – we will do everything we can to meet your
                  expectations. We’re flexible, fast, responsive and reliable
                  and we always bring a fresh perspective. No matter what stage
                  of the planning you’re in, we’d welcome the opportunity to
                  help you make your event the best it can be. we produce the
                  highest quality events to disseminate to the world wide that
                  not only set the standard for event production, but also set
                  the trend and general supply of goods for the industry{" "}
                </p>
                <hr className="invis" />
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 first">
                    <ul className="check">
                      <li>General Supply</li>
                      <li>Consultancy</li>
                      <li>Supervision</li>
                      <li>IT Maintenance</li>
                      <li>Information Technology</li>
                    </ul>
                    { }
                  </div>
                  { }
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul className="check">
                      <li>Video Coverage</li>
                      <li>Live Stream</li>
                      <li>Pre-Record</li>
                      <li>Documentary</li>
                      <li>Advertisment</li>
                    </ul>
                    { }
                  </div>
                  { }
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 last">
                    <ul className="check">
                      <li>Sell Tickets</li>
                      <li>Registration system</li>
                      <li>Protocols Service</li>
                      <li>Interpretation service</li>
                    </ul>
                    { }
                  </div>
                  { }
                </div>
                { }
                <hr className="invis" />
              </div>
              { }
            </div>
            { }
          </div>
          { }
        </div>
        {}
      </section>
    );
  }
}

export default welcomeServices;
