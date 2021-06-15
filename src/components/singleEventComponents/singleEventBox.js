import React from "react";
import EventHeader from "./EventHeader";
import SingleEventInfo from "./SingleEventInfo";

class SingleEventBox extends React.Component {
  render() {
    return (
      <div
        className="event-23mEU"
        style={{
          color: "black"
        }}
      >
        <EventHeader></EventHeader>
        <SingleEventInfo></SingleEventInfo>
      </div>
    );
  }
}

export default SingleEventBox;
