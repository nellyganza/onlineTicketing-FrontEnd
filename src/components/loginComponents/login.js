import React from "react";
import ReactDOM from 'react-dom';
import '../../styles/login.css';
import $ from 'jquery';
import { Link } from "react-router-dom";
import baclImg from '../../assets/images/audience-1835431_1920.jpg'
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

class login extends React.Component {
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

          <h1>Log In</h1>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="pass" placeholder="Password" />
            <a href="#" type="button" className="orange-btn">
              Log in
            </a>
            <div id="remember-container">
              <input
                type="checkbox"
                id="checkbox-2-1"
                className="checkbox"
                defaultChecked="checked"
              />
              <span id="remember">Remember me</span>
              <span id="forgotten">Forgotten password</span>
            </div>
            <div className="or-seperator">
              <b>or</b>
            </div>
            <div className="social-btn">
              <FaFacebook className="fa fa-facebook" />
              <FaTwitter className="fa fa-twitter" />
              <FaGoogle className="fa fa-google" />
            </div>
            <div
              className="gotoregister"
              style={{
                display: "inline",
                padding: "10px"
              }}
            >
              <p>
                Don't have account ?{" "}
                <Link to="/signup/individual"> Register</Link>
              </p>
              <p>
                Organisation{" "}
                <Link to="/signup/organisation"> Click here</Link>{" "}
              </p>
            </div>
          </form>
        </div>
        {}
        <div id="forgotten-container">
          <div
            style={{
              float: "right",
              marginRight: "4px"
            }}
          >
            <span className="close-forget-btn" id="close-forget">
              <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" />
            </span>
          </div>
          <h1>Forgotten</h1>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <a href="#" type="button" className="orange-btn">
              Get new password
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
