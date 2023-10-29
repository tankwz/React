import React from 'react';
import logo from '../../img/react.png';
function Header() {
  return (
    <div
      className="pt-3 ps-2 row       "
      style={{ borderBottom: '1px solid #777' }}
    >
      <div className="col-4  text-end  ">
        <img src={logo} className="img-fluid " style={{ height: '40px' }} />
      </div>
      <div className="col-8 align-items-center d-flex  ">
        <span className="h4 pt-2 text-white">React Course - TravelOpedia</span>
      </div>
      <div className="col"></div>
    </div>
  );
}

export default Header;
