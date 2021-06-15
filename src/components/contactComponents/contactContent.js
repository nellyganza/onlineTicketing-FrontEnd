import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class contactContent extends React.Component {
  static defaultProps = {
    center: {
      lat: -1.966162,
      lng: 30.081285
    },
    zoom: 11
  };
  render() {
    return (
      <section className="section gb nopadtop">
        <div className="container">
          <div className="boxed boxedp4">
            <div className="wow slideInUp" style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyADX_HVhXMO8IXWJRHzPpiEpNROmZhTBVw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-1.966162}
            lng={30.081285}
            text="Intercore office"
          />
        </GoogleMapReact>
      </div>
            <div className="contact">
              <div className="contact-left">
                <div className="contact-1">
                  <div className="small-box">
                    <i className="flaticon-email wow fadeIn" />
                    <h4>Physical Address</h4>
                    <small>Phone: +250781182427</small>
                    <small>Fax: +250781182427</small>
                    <p>
                      <a href="mailto:intercoregoup@gmail.com">
                        Intercoregroup@gmail.com
                      </a>
                    </p>
                  </div>
                  {}
                </div>
                {}
                <div className="contact-2">
                  <div className="small-box">
                    <i className="flaticon-map-with-position-marker wow fadeIn" />
                    <h4>Visit Our Office</h4>
                    <small>PO Box 250123 kk st 66</small>
                    <small>Rwandex 12354 Rwanda </small>
                    <p>
                      <a href="#">View on Google Map</a>
                    </p>
                  </div>
                  {}
                </div>
              </div>
              <div className="contact-right">
                <div className="text-center border border-light p-5">
                  <p className="h3 mb-4">Contact us</p>
                  {}
                  <input
                    type="text"
                    id="contactname"
                    className="form-control mb-4"
                    placeholder="Name"
                  />
                  {}
                  <input
                    type="email"
                    id="contactemail"
                    className="form-control mb-4"
                    placeholder="E-mail"
                  />
                  {}
                  <label>Subject</label>
                  <select className="browser-default form-control custom-select mb-4">
                    <option value disabled>
                      Choose option
                    </option>
                    <option value={1} selected>
                      Feedback
                    </option>
                    <option value={2}>Report a bug</option>
                    <option value={3}>Feature request</option>
                    <option value={4}>Feature request</option>
                  </select>
                  {}
                  <div className="form-group">
                    <textarea
                      className="form-control rounded-0"
                      id="exampleFormControlTextarea2"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  {}
                  <button className="btn btn-block" type="submit">
                    Send
                  </button>
                </div>
                {}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="section-title text-center"></div>
                {}
              </div>
              {}
            </div>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default contactContent;
