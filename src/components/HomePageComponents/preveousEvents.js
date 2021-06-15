import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../styles/carousel.css';
import Image1 from '../../assets/images/bak2.jpg';
import Image2 from '../../assets/images/eve1.jpg';

class preveousEvents extends React.Component {
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
          <div
            className="section-title text-center"
            style={{
              marginTop: "10px"
            }}
          >
            <p className="font-Sansation" id="somePeople">Previous Events</p>
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
                    <a href="html/single-recent-event.html">
                      How to learn perfect code with Javascript
                    </a>
                  </h4>
                  <p />
                </div>
                { }
                <div className="event-footer clearfix">
                  <ul className="list-inline">
                    <li>
                      <a>21 March 2020</a>
                    </li>
                    <li>
                      <a>by WP Destek</a>
                    </li>
                  </ul>
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
                    <a href="html/single-recent-event.html">
                      The most suitable live stream & sell tickets
                    </a>
                  </h4>
                </div>
                { }
                <div className="event-footer clearfix">
                  <ul className="list-inline">
                    <li>
                      <a>20 March 2020</a>
                    </li>
                    <li>
                      <a>by WP Destek</a>
                    </li>
                  </ul>
                </div>
                { }
              </div>
              { }
            </div>
            { }
          </OwlCarousel>
          { }
          <hr className="invis" />
        </div>
        {}
      </section>
    );
  }
}

export default preveousEvents;
