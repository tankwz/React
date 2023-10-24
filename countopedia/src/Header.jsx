import logo from './img/logo192.png';

export default () => {
  return (
    <div
      className="pt-3 ps-2 row       "
      style={{ borderBottom: '1px solid #777' }}
    >
      <div className="col-4  text-end  ">
        <img src={logo} className="img-fluid " style={{ height: '100px' }} />
      </div>
      <div className="col-8 align-items-center d-flex  ">
        <span className="h2 pt-4 text-white">React Course - Countopedia</span>
      </div>
      <div className="col"></div>
    </div>
  );
};
