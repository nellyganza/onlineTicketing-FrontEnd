import React from "react";

class PaymentTicketInfo extends React.Component {
  render() {
    return (
      <div className="tab-pane fade">
        <div
          className="ticket-payment-info"
          style={{
            padding: "5px"
          }}
        >
          <h4>Checkout</h4>
          <legend />
          <h4>Select your payment method</h4>
          <form className="bs-example" action>
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading clearfix">
                  <h4 className="panel-title pull-left">
                    <label
                      htmlFor="r11"
                      style={{
                        width: "350px"
                      }}
                    >
                      <input
                        type="radio"
                        id="r11"
                        name="occupation"
                        defaultValue="Mobile-Money"
                        defaultChecked
                        required
                      />{" "}
                      MTN Mobile Money
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                      />
                    </label>
                  </h4>
                  <div className=" list-inline pull-right">
                    <img
                      src={'../../assets/images/13.png'}
                      width="60px"
                      height="60px"
                    />
                  </div>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="pane-body-content" id="pay-momo-content">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column"
                        }}
                      >
                        <h4>Payment</h4>
                        <label htmlFor="mphone">Phone number</label>
                        <input
                          type="tel"
                          id="mphone"
                          name="momoPhone"
                          placeholder="+250-780000000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div
                  className="panel-heading clearfix"
                  style={{
                    padding: "15px"
                  }}
                >
                  <h4 className="panel-title pull-left">
                    <label
                      htmlFor="r12"
                      style={{
                        width: "350px"
                      }}
                    >
                      <input
                        type="radio"
                        id="r12"
                        name="occupation"
                        defaultValue="Visa-Card"
                        required
                      />{" "}
                      Visa Card
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      />
                    </label>
                  </h4>
                  <div className="pull-right list-inline">
                    <i
                      className="fab fa-2x fa-cc-visa"
                      style={{
                        color: "navy"
                      }}
                    />
                    <i
                      className="fab fa-2x fa-cc-paypal"
                      style={{
                        color: "blue"
                      }}
                    />
                    <i
                      className="fab fa-2x fa-cc-mastercard"
                      style={{
                        color: "red"
                      }}
                    />
                  </div>
                  {}
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <div className="pane-body-content" id="pay-card-content">
                      <div>
                        <form className="form-group">
                          <div className="col-50"></div>
                        </form>
                        <form
                          id="payment-form"
                          style={{
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          {}
                          <div className="sr-root">
                            <div className="sr-main">
                              <label htmlFor="cname">Name on Card</label>
                              <input
                                type="text"
                                id="cname"
                                name="cardname"
                                placeholder="John More Doe"
                              />
                              <label htmlFor="card-element">
                                Credit or debit card
                              </label>
                              <div className="sr-combo-inputs-row">
                                <div
                                  className="sr-input sr-card-element"
                                  id="card-element"
                                ></div>
                              </div>
                              <div
                                className="sr-field-error"
                                id="card-errors"
                                role="alert"
                              />
                              <div className="sr-result hidden">
                                <p>
                                  Payment completed
                                  <br />
                                </p>
                                <pre>
                                  {
                                    "                                                                                              "
                                  }
                                  <code />
                                  {"\n"}
                                  {
                                    "                                                                                            "
                                  }
                                </pre>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div
            className="pay-btn-container"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            {}
            <button id="button-submit">
              <div className="spinner hidden" id="spinner" />
              <span id="button-text">Pay Now</span>
              <span id="order-amount" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentTicketInfo;
