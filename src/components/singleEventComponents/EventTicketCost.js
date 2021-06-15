import React, { Component } from "react";
import EventPaymentNav from "./EventPaymentNav";
import PaymentEventTicketInfo from "./PaymentEventTicketInfo";
import PaymentBuyerTicketInfo from "./PaymentBuyerTicketInfo";
import PaymentTicketInfo from "./PaymentTicketInfo";
import PaymentEventRightSide from "./PaymentEventRightSide";

import Modal from '@material-ui/core/Modal';
import TicketInfoModal from "./ticketInfoModal";
class EventTicketCost extends Component {
  state = {
    visible: false
  }
  onHide = () => {
    console.log("Hello World");
    if (this.state.visible) {
      this.setState({ visible: false })
    }
    else {
      this.setState({ visible: true })
    }

  }
  render() {
    return (
     <TicketInfoModal />
    );
  }
}

export default EventTicketCost;
