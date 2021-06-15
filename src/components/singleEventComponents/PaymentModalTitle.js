import React from "react";
import { setToDefaults } from "../../js/myscript";

class PaymentModalTitle extends React.Component {
  render() {
    return (
      <div className="ticket-info-modal-header">
        <span className="ticket-info-close" onClick={setToDefaults()}>
          ×
        </span>
        <h2>Umupira Hagatiya ya APR FC vs Rayon Sport</h2>
      </div>
    );
  }
}

export default PaymentModalTitle;
