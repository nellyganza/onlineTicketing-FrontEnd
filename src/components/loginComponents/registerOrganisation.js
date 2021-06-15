import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../styles/login.css';

class registerOrganisation extends React.Component {
  componentDidMount() {
    $('#login-button').click(function () {
      $('#login-button').fadeOut("slow", function () {
        $("#container-login").fadeIn();
        TweenMax.from("#container-login", .4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to("#container-login", .4, { scale: 1, ease: Sine.easeInOut });
      });
    });

    $("#close-login").click(function () {
      $("#container-login, #forgotten-container").fadeOut(800, function () {
        $("#login-button").fadeIn();
        TweenMax.from("#login-button", .4, { scale: 0, ease: Sine.easeInOut });
        TweenMax.to("#login-button", .4, { scale: 1, ease: Sine.easeInOut });
      });
    });
    $("#close-forget").click(function () {
      TweenMax.from("#container-login", .4, { scale: 1, ease: Sine.easeInOut });
      TweenMax.to("#container-login", .4, { left: "0px", scale: 0, ease: Sine.easeInOut });
      $("#container-login, #forgotten-container").fadeOut(800, function () {
        $("#login-button").fadeIn(800);
      });
    });
    /* Forgotten Password */
    $('#forgotten').click(function () {
      $("#container-login").fadeOut(function () {
        $("#forgotten-container").fadeIn();
      });
    });

    // $("#close-login").click(function (){
    //   $("#container").fadeOut(function(){
    //       $("#login-button").fadeIn(800);
    //     });
    // }) 

  }
  render() {
    return (
      <div id="loginpage">
        <div id="login-button">
          <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" />
        </div>
        <div id="container-login">
        <div
            style={{
              float: "right",
              marginRight: "4px"
            }}
          >
            <span className="close-btn" id="close-login">
              <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" />
            </span>
          </div>
          <h1>Register</h1>
          <div
            className="gotoregister"
            style={{
              display: "inline"
            }}
          >
            <p>
              Have account ? <Link to="/login"> Log in</Link>
            </p>
          </div>
          <form>
            <input type="text" name="oname" placeholder="Organisation Name" />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="pass" placeholder="Password" />
            <input
              type="password"
              name="cpass"
              placeholder="Confirm Password"
            />
            <a href="#" type="button" className="orange-btn">
              Register
            </a>
            <div className="or-seperator">
              <b>or</b>
            </div>
            <div className="social-btn">
              <FaFacebook className="fa fa-facebook" />
              <FaTwitter className="fa fa-twitter" />
              <FaGoogle className="fa fa-google" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default registerOrganisation;
