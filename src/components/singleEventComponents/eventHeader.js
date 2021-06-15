import React from "react";
import EventMainImage from "./EventMainImage";
import ImageNvaigationMenu from "./ImageNvaigationMenu";

class EventHeader extends React.Component {
  render() {
    return (
      <div className="navPlaceholder-3pqfv">
        <EventMainImage></EventMainImage>
        <ImageNvaigationMenu></ImageNvaigationMenu>
      </div>
    );
  }
}

export default EventHeader;
