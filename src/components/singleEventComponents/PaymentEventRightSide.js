import React from "react";

class PaymentEventRightSide extends React.Component {
  render() {
    return (
      <div className="select-ticket-right-side">
        <div>
          <h4> Your Order</h4>
          <legend />
          <div className="ticket-calculation"></div>
          {}
          <legend />
          <div className="ticket-receipt">
            <div>
              <p>Subtotal Amount</p>
              <span id="ticket-amaount">0</span>
            </div>
            <div>
              <p>Service Charge</p>
              <span id="ticket-service-charges">0</span>
            </div>
          </div>
          {}
          <legend />
          <div className="ticket-total">
            <p>Total Amount</p> <span id="ticket-total-amount">0</span>
          </div>
          {}
        </div>
        {}
      </div>
    );
  }
}

export default PaymentEventRightSide;
