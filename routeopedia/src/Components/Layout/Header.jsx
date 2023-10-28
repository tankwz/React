import { Link } from 'react-router-dom';
import logo from '../../img/react.png';

// export default () => {
//   return (
//     <div
//       className="pt-3 ps-2 row       "
//       style={{ borderBottom: '1px solid #777' }}
//     >
//       <div className="col-4  text-end  ">
//         <img src={logo} className="img-fluid " style={{ height: '100px' }} />
//       </div>
//       <div className="col-8 align-items-center d-flex  ">
//         <span className="h2 pt-4 text-white">React Course - Cyclopedia</span>
//       </div>
//       <div className="col"></div>
//     </div>
//   );
// };

import React from 'react';

function Header() {
  return (
    <div className="  ">
      <nav className="navbar navbar-expand-lg  bg-dark navbar-dark   text-white">
        <div className="container-fluid">
          <div className="  ">
            <img src={logo} className="img-fluid " style={{ height: '35px' }} />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cryptodetail/btc/10">
                  Crypto Detail
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/product/">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/create">
                      Create Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/details/">
                      Product Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/list/">
                      {' '}
                      Product List{' '}
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
