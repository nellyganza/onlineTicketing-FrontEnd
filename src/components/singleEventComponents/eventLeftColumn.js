import React from "react";
import { openContactHost, postComment } from "../../js/myscript";

class EventLeftColumn extends React.Component {
  render() {
    return (
      <div className="leftColumn-3ffNP">
        <div id="Description" className="section-3OOFy undefined">
          <h4 className="heading-3AIZs">Description</h4>
          <div className="description-2rEC6">
            <p
              style={{
                textAlign: "center"
              }}
            >
              <strong> Event Title </strong>
            </p>
            <p>The standard Lorem Ipsum passage, used since the 1500s</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </div>
        <div id="Date and time" className="section-3OOFy undefined">
          <h4 className="heading-3AIZs">Date and time</h4>
          <div className="container-3RJpY">
            <code className="container-Nl1QG">
              <div className="content-3wO74">
                <div className="date-1E4xN">Fri, Nov 20 - Sat, Nov 21</div>
                <div className="time-ISt0m">8:00 AM-8:00 PM</div>
              </div>
            </code>
          </div>
        </div>
        <div id="Location" className="section-3OOFy undefined">
          <h4 className="heading-3AIZs">Location</h4>
          <div className="mapContainer-J7aOi">
            <div className="directions-21Pwa">
              <h4 className="heading-16ouf">
                <i className="fas fa-street-view" /> Kigali, Rwanda
              </h4>
              <p className="copy-PM4MQ">
                <i className="fas fa-street-view" /> Kicukiro - sonatube
              </p>
              <p className="copy-PM4MQ">
                <i className="fas fa-street-view" /> KK 345 st 56
              </p>
              <a
                href="https://maps.google.com?saddr=Current+Location&daddr=-1.966162,30.081285"
                target="_blank"
                rel="noopener noreferrer"
                className="link-3upWE"
              >
                <i className="fas fa-map-marked-alt" /> Get Directions
              </a>
            </div>
          </div>
        </div>
        <div id="Photos" className="section-3OOFy undefined">
          <h4 className="heading-3AIZs">Photos</h4>
          <div>
            <section
              style={{
                position: "relative"
              }}
            >
              <div>
                <div className="body-AiZ_J">
                  <div className="container-1JPxN">
                    <img
                      className="image-1uH9h"
                      src="../assets/images/upload/APR-1024x720.jpg"
                      width="100%"
                    />
                  </div>
                  <div className="container-1JPxN">
                    <img
                      className="image-1uH9h"
                      src="../assets/images/upload/apr_fc-9.png"
                      width="100%"
                    />
                  </div>
                  <div className="container-1JPxN">
                    <img
                      className="image-1uH9h"
                      src="../assets/images/upload/Ubwo-APR-FC-yanganyaga-na-AS-Kigali-mu-mukino-wumunsi-wa-16-wa-shampiyona.jpg"
                      width="100%"
                    />
                  </div>
                  <div className="container--more-1u8eW">
                    <img
                      className="image--more-1pJ4s"
                      src="../assets/images/upload/4x2a8484jpg-e5c4-35683-678x381.jpg"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id="Host" className="section-3OOFy undefined">
          <h4 className="heading-3AIZs">About the host</h4>
          <div className="contact-host-info">
            <div>
              <img
                className="container-2a9I2 avatar-2N471"
                src="../assets/images/Logo/Arm\xE9e_Patriotique_Rwandaise_FC_(logo).jpg"
                alt="Host Logo"
              />
            </div>
            <div className="rowInfo-YvmgQ">
              <h5 className="host-title">APR FC</h5>
              <a className="contact-host-page" onClick={openContactHost()}>
                Contact Host
              </a>
            </div>
          </div>
        </div>
        <div id="comment-posted">
          <h4>Comments</h4>
        </div>
        <div id="respond">
          <h4>Leave a Comment</h4>
          <div id="commentform">
            <label htmlFor="comment_author" className="required">
              Your name
            </label>
            <input
              type="text"
              name="comment_author"
              id="comment_author"
              placeholder="Type your Name"
              tabIndex={1}
              required="required"
            />
            <label htmlFor="email" className="required">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type ypur E-mail"
              tabIndex={2}
              required="required"
            />
            <label htmlFor="comment" className="required">
              Your message
            </label>
            <textarea
              name="comment"
              id="comment"
              rows={10}
              tabIndex={4}
              placeholder="Type your message"
              required="required"
            />
            {}
            <input
              type="hidden"
              name="comment_post_ID"
              id="comment_post_ID"
            />
            <button
              name="submit"
              className="btn"
              onClick={postComment()}
              type="submit"
            >
              Submit comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventLeftColumn;
