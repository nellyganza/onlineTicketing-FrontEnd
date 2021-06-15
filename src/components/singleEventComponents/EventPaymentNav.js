import React from "react";

class EventPaymentNav extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className="active ticket-tab-list">
          <a data-toggle="tab" href="#menu1">
            Select Ticket
          </a>
        </li>
        <li className="ticket-tab-list">
          <a data-toggle="tab" href="#menu2">
            Ticket Info
          </a>
        </li>
        <li className="ticket-tab-list">
          <a data-toggle="tab" href="#menu3">
            Payment Info
          </a>
        </li>
      </ul>
    );
  }
}

export default EventPaymentNav;
