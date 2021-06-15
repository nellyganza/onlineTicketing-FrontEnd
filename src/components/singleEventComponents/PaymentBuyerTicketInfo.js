import React from "react";
import {setCLasstoActiveOnTicketInfoHeader} from '../../js/myscript';

class PaymentBuyerTicketInfo extends React.Component {
  render() {
    return (
      <div  className="tab-pane fade">
        <div className="ticket-buyer-content">
          <div id="ticket-buyer-info">
            <h4>Buyer Information</h4>
            <legend />
            <form action id="buyer-information" className="buyer-info">
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
              <input placeholder="Phone Number" type="tel" />
              <input placeholder="Email" type="email" />
            </form>
          </div>
          <div id="bought-ticket-info">
            <h4>Ticket Information</h4>
            <legend />
          </div>
          <legend />
          <a
            type="button"
            onClick={setCLasstoActiveOnTicketInfoHeader('#menu3')}
            data-toggle="tab"
            className="btn btn-primary"
            href="#menu3"
          >
            Continue
          </a>
        </div>
      </div>
    );
  }
}

export default PaymentBuyerTicketInfo;
