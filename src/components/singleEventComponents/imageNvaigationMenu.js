import React from "react";

class ImageNvaigationMenu extends React.Component {
  render() {
    return (
      <div className="nav-10TS6 ">
        <div className="navContainer-5d9ks">
          <button data-name="Description" className="menuItem-2lMHl">
            <a href="#Description">Description</a>
          </button>
          <button data-name="Date and time" className="menuItem-2lMHl">
            <a href="#Date and time">Date and time</a>
          </button>
          <button data-name="Location" className="menuItem-2lMHl">
            <a href="#Location">Location</a>
          </button>
          <button data-name="Host" className="menuItem-2lMHl">
            <a href="#Host">About the host</a>
          </button>
          <button data-name="Photos" className="menuItem-2lMHl">
            <a href="#Photos">Photos</a>
          </button>
        </div>
      </div>
    );
  }
}

export default ImageNvaigationMenu;
