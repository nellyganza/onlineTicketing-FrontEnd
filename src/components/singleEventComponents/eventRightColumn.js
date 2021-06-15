import React from "react";
import EventRecentEvents from "./EventRecentEvents";
import EventTicketCost from "./EventTicketCost";

class EventRightColumn extends React.Component {
  render() {
    return (
      <div className="light-event-info">
        <EventTicketCost></EventTicketCost>
        {}
        <EventRecentEvents/>
      </div>
    );
  }
}

export default EventRightColumn;
