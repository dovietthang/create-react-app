import FooterFullWrapper from './FooterFullWrapper';

// ==============================|| MAIN NAVBAR / Footer ||============================== //

const Footer = () => {
  return (
    <>
      <FooterFullWrapper />
      <footer id="colophon" className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="site-info"> © Copyright 2014. Designed by SouthTeam - Bản quyền thiết kế web thuộc về SouthTeam</div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
