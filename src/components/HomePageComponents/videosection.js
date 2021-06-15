import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../styles/carousel.css';
import backImage from '../../assets/images/eve1.jpg';
class videosection extends React.Component {
  render() {
    return (
      <section id="home" className="video-section js-height-full">
        <div className="overlay" />
        <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={10}
          nav={true}
          animateIn
          dots={false}
          autoplay={true}
          autoplayTimeout={4000}
          items={1}
          className="w-full"
        >
          <div className="home-text-wrapper relative container" style={{
            backgroundImage: `url(${backImage})`,
            backgroundSize: "cover",
            height: "100vh"
          }}>
            <div className="home-message">
              <p> INTECORE GROUP LTD</p>
              <small>
                INTERCORE GROUP Let the experts help you and your business with
                everything from basic meetings to world class events with an
              experience{" "}
              </small>
            </div>
          </div>
        </OwlCarousel>

      </section>
    );
  }
}

export default videosection;
