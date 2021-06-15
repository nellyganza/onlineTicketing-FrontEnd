import React from "react";

class EventRecentEvents extends React.Component {
  render() {
    return (
      <div className="recent-event">
        <h4
          style={{
            marginLeft: "20px"
          }}
        >
          Recent Events
        </h4>
        <div>
          <div>
            <h4>APR FC</h4>
            <h4>Umupira uzahuza APR FC na Rayon Sport kuri stade Amahoro</h4>
          </div>
          <div>
            <h4>250 Bar&Restourent</h4>
            <h4>
              Ikirori cyo kwizihiza imyaka 30 250 imaze ifunguye ibikorwa byayo
              mu Rwanda
            </h4>
          </div>
          <div>
            <h4>Expo</h4>
            <h4>Expo 2020 igikondo kuri expo ground</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default EventRecentEvents;
