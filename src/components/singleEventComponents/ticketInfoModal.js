import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { calculateCost, setCLasstoActiveOnTicketInfoHeader } from '../../js/myscript';
import { Paper } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onHide = () => {
    console.log("Hello World");
    console.log(visible);
    if (visible) {
      setVisible(false)
    }
    else {
      setVisible(true);
    }

  }
  return (

    <>
    <div className="cost-ticket">
      <label>Prices</label>
      <div>
        <label
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.8)"
          }}
        >
          VVIP
      </label>
        <label
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          20000 Frw
      </label>
      </div>
      <div>
        <label
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.6)"
          }}
        >
          VIP
      </label>
        <label
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          10000 Frw
      </label>
      </div>
      <div>
        <label
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.4)"
          }}
        >
          Common
      </label>
        <label
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          5000 Frw
      </label>
      </div>
      <div>
        <label
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.2)"
          }}
        >
          Table
      </label>
        <label
          style={{
            backgroundColor: "white",
            color: "black"
          }}
        >
          200000 Frw
      </label>
      </div>
      <div>
        <button
          id="getTicketButton"
          className="btn"
          onClick={onHide}
        >
          Get Ticket
      </button>
      </div>
      { }
    </div>
    <Modal onClose={() => onHide} open={visible}>
          
    <div id="ticket-info-modal-content">
  <div className="container ticket-info-modal-body">

    <div>
      <div className="ticket-info-modal-header">
        <span className="ticket-info-close" onClick={onHide}>
          ×
          </span>
        <h2>Umupira Hagatiya ya APR FC vs Rayon Sport</h2>
      </div>
      <Paper position="static" className="nav nav-tabs nav-justified">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          className="nav nav-tabs nav-justified"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Select Ticket"  {...a11yProps(0)} className="ticket-tab-list" />
          <Tab label="Ticket Info"  {...a11yProps(1)} className="ticket-tab-list" />
          <Tab label="Payment Info" {...a11yProps(2)} className="ticket-tab-list" />
        </Tabs>
      </Paper>

      <div id="ticket-info-id">
        <div className="ticket-info-class">
          <div>
            <div className="ticket-menu1-leftside tab-content">


              <TabPanel value={value} index={0}>
                <div>
                  <div className="select-ticket-information">
                    <legend>Select Your Ticket</legend>
                    <div>
                      <p> Date 25-12-2010</p>
                      <time> 15:30 PM - 17:00 PM</time>
                    </div>
                    <div className="costs-div">
                      <legend> Select Price</legend>
                      <div className="select select-cost">
                        <select name="slct" id="select-ticket-cost">
                          <option selected disabled id="select-0-0">
                            Select Price
                          </option>
                          <option value={200000}> Table@200000 Frw</option>
                          <option value={10000}> VVIP@10000 Frw</option>
                          <option value={5000}> VIP@5000 Frw</option>
                          <option value={2000}> Common@2000 Frw</option>
                        </select>
                      </div>
                    </div>
                    <div className="numberofticket-div">
                      <legend>Select Number of Tickects</legend>
                      <div className="select select-numberofticket">
                        <select
                          id="select-ticket-number"
                          onChange={calculateCost()}
                        >
                          <option
                            value={0}
                            disabled
                            selected
                            id="select-0-1"
                          >
                            Select Ticket Number
                          </option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                          <option value={11}>11</option>
                          <option value={12}>12</option>
                          <option value={13}>13</option>
                          <option value={14}>14</option>
                          <option value={15}>15</option>
                          <option value={16}>16</option>
                          <option value={17}>17</option>
                          <option value={18}>18</option>
                          <option value={19}>19</option>
                          <option value={20}>20</option>
                          <option value={21}>21</option>
                          <option value={22}>22</option>
                          <option value={23}>23</option>
                          <option value={24}>24</option>
                          <option value={25}>25</option>
                          <option value={26}>26</option>
                          <option value={27}>27</option>
                          <option value={28}>28</option>
                          <option value={29}>29</option>
                          <option value={30}>30</option>
                        </select>
                      </div>
                    </div>
                    <a
                      type="button"
                      onClick={setCLasstoActiveOnTicketInfoHeader('#menu2')}
                      data-toggle="tab"
                      className="btn btn-primary"
                    >
                      Continue
                    </a>
                  </div>
                </div>

              </TabPanel>
              <TabPanel value={value} index={1}>
                <div>
                  <div className="ticket-buyer-content">
                    <div id="ticket-buyer-info">
                      <h4>Buyer Information</h4>
                      <legend />
                      <form
                        action
                        id="buyer-information"
                        className="buyer-info"
                      >
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

              </TabPanel>
              <TabPanel value={value} index={2}>
                <div>
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
                                src="../assets/images/13.png"
                                width="60px"
                                height="60px"
                              />
                            </div>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse in"
                          >
                            <div className="panel-body">
                              <div
                                className="pane-body-content"
                                id="pay-momo-content"
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                >
                                  <h4>Payment</h4>
                                  <label htmlFor="mphone">
                                    Phone number
                                  </label>
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
                            { }
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body">
                              <div
                                className="pane-body-content"
                                id="pay-card-content"
                              >
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
                                    { }
                                    <div className="sr-root">
                                      <div className="sr-main">
                                        <label htmlFor="cname">
                                          Name on Card
                                        </label>
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
                      { }
                      <button id="button-submit">
                        <div className="spinner hidden" id="spinner" />
                        <span id="button-text">Pay Now</span>
                        <span id="order-amount" />
                      </button>
                    </div>
                  </div>
                </div>

              </TabPanel>

            </div>
            <div className="select-ticket-right-side">
              <div>
                <h4> Your Order</h4>
                <legend />
                <div className="ticket-calculation"></div>
                { }
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
                { }
                <legend />
                <div className="ticket-total">
                  <p>Total Amount</p>{" "}
                  <span id="ticket-total-amount">0</span>
                </div>
                { }
              </div>
              { }
            </div>
            { }
          </div>

        </div>
      </div>


    </div>

  </div>
</div>


    </Modal>
  </>
  );
}
