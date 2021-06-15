import React from "react";
import { calculateCost, setCLasstoActiveOnTicketInfoHeader } from "../../js/myscript";

class PaymentEventTicketInfo extends React.Component {
  render() {
    return (
      <div  className="tab-pane fade active in">
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
              <select id="select-ticket-number" onChange={calculateCost()}>
               
                <option selected value={1}>1</option>
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
            href="#menu2"
          >
            Continue
          </a>
        </div>
      </div>
    );
  }
}

export default PaymentEventTicketInfo;
