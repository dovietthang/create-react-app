// assets
import { Link } from 'react-router-dom';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Extra = () => {
  return (
    <>
      <div className="zalo-fix">
        <Link className="click--zalo" to="#" target="_blank">
          zalo
        </Link>
      </div>
      <div className="phone-fixed">
        <a href="tel:0938049434" className="hotline-mobi" rel="nofollow">
          <div className="website-alo-phone">
            <div className="quydinh-tip quydinh-tip-2">0938.049.434</div>
            <div className="animated infinite zoomIn website-alo-ph-circle"></div>
            <div className="animated infinite pulse website-alo-ph-circle-fill"></div>
            <div className="animated infinite tada website-alo-ph-img-circle">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
          </div>
        </a>
      </div>
      <Link className="gotop" style={{ right: '15px' }} to="#" target="_blank">
        gotop
      </Link>
    </>
  );
};

export default Extra;
