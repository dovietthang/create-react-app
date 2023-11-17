// import PropTypes from 'prop-types';

// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Avatar, Box, ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import logo from 'assets/images/logo.png';
import MenuList from './MenuList';
import menuItem from 'menu-items';
// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  // const theme = useTheme();
  //
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        document.querySelector('header#masthead').classList.add('fixed');
        document.querySelector('.gotop').style.right = '15px';
      } else {
        document.querySelector('header#masthead').classList.remove('fixed');
        document.querySelector('.gotop').style.right = '-55px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    const primeryMenu = document.querySelector('.primery-menu');
    const panelOverlay = document.querySelector('.panel-overlay');
    const mobileMenu = document.querySelector('a.mobile-menu');

    if (primeryMenu) {
      primeryMenu.classList.toggle('display');
    }

    if (panelOverlay) {
      panelOverlay.classList.toggle('display');
    }

    if (mobileMenu) {
      mobileMenu.classList.toggle('display');
    }
  };

  // const handleSubMenuToggle = (event) => {
  //   console.log(event.currentTarget);
  //   const iconElement = event.currentTarget;
  //   const targetId = iconElement.getAttribute('data-target');
  //   const submenu = document.getElementById(targetId);

  //   iconElement.classList.toggle('submenu-opened');

  //   if (submenu) {
  //     if (submenu.classList.contains('open')) {
  //       submenu.classList.remove('open');
  //       submenu.style.display = 'none';
  //     } else {
  //       submenu.classList.add('open');
  //       submenu.style.display = 'block';
  //     }
  //   }
  // };

  return (
    <>
      <header id="masthead" className="site-header fixed">
        <div className="middle-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-8">
                <div className="logo-site">
                  {/* <a href="index.html" title="Thiết kế website chuyên nghiệp">
                <img src="wp-content/themes/southteam/images/logo-white.png" alt="Thiết kế Website chuyên nghiệp">
              </a> */}
                  <Link className="d-flex" to="#" target="_blank">
                    <img src={logo} className="img-fluid" alt="brand" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-4">
                <div className="primery-menu">
                  <div className="menu-menu-chinh-container">
                    <MenuList menuItems={menuItem} />
                    {/* <ul id="primary-menu" className="menu">
                      <li
                        id="menu-item-13"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-13"
                      >
                        <a href="index.html" aria-current="page">
                          Trang chủ
                        </a>
                      </li>
                      <li id="menu-item-156" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                        <a href="gioi-thieu/index.html">Giới thiệu</a>
                      </li>
                      <li
                        id="menu-item-48"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-48"
                      >
                        <button
                          className="fa fa-plus d-lg-none"
                          type="button"
                          data-target="menu-item-48-submenu"
                          aria-haspopup="true"
                          onClick={handleSubMenuToggle}
                          aria-expanded={true}
                        ></button>
                        <a href="#">Dịch vụ</a>
                        <ul className="sub-menu" id="menu-item-48-submenu">
                          <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                            <a href="dich-vu/thiet-ke-website/index.html">Thiết kế Website</a>
                          </li>
                          <li id="menu-item-67" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67">
                            <a href="dich-vu/dich-vu-quan-tri-website/index.html">Quản trị Website</a>
                          </li>
                          <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                            <a href="dich-vu/marketing-online/index.html">Marketing Online</a>
                          </li>
                          <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69">
                            <a href="dich-vu/google-adwords/index.html">Google Ads</a>
                          </li>
                          <li id="menu-item-68" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68">
                            <a href="dich-vu/viet-bai-chuan-seo/index.html">Viết bài chuẩn SEO</a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                        <a href="bang-gia-thiet-ke-website/index.html">Bảng giá</a>
                      </li>
                      <li
                        id="menu-item-15"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-15"
                      >
                        <button
                          type="button"
                          className="fa fa-plus d-lg-none"
                          data-target="menu-item-49-submenu"
                          aria-haspopup="true"
                          aria-expanded={true}
                          onClick={handleSubMenuToggle}
                        ></button>
                        <a href="giao-dien-website-mau/index.html">Giao diện website mẫu</a>
                        <ul className="sub-menu" id="menu-item-49-submenu">
                          <li id="menu-item-72" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-72">
                            <a href="danh-muc/mau-giao-dien-website-ban-hang/index.html">Mẫu Website bán hàng</a>
                          </li>
                          <li id="menu-item-75" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-75">
                            <a href="danh-muc/mau-website-gioi-thieu/index.html">Mẫu Website giới thiệu</a>
                          </li>
                          <li id="menu-item-76" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-76">
                            <a href="danh-muc/mau-website-thoi-trang/index.html">Mẫu Website thời trang</a>
                          </li>
                          <li id="menu-item-73" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-73">
                            <a href="danh-muc/mau-website-bds/index.html">Mẫu Website BĐS</a>
                          </li>
                          <li id="menu-item-74" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-74">
                            <a href="danh-muc/mau-website-du-lich/index.html">Mẫu Website du lịch</a>
                          </li>
                          <li id="menu-item-78" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-78">
                            <a href="danh-muc/mau-website-khach-san/index.html">Mẫu Website khách sạn</a>
                          </li>
                          <li id="menu-item-77" className="menu-item menu-item-type-taxonomy menu-item-object-danh-muc menu-item-77">
                            <a href="danh-muc/mau-website-xay-dung/index.html">Mẫu Website xây dựng</a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-2323" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2323">
                        <a href="du-an-da-thuc-hien/index.html">Các dự án</a>
                      </li>
                      <li id="menu-item-17" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
                        <a href="lien-he/index.html">Liên hệ</a>
                      </li>
                    </ul> */}
                  </div>
                  <a className="btn-regis" data-toggle="modal" data-target="#regis-all">
                    Đăng ký ngay
                  </a>
                </div>
                <a className="mobile-menu hidden-lg-up pull-right" href="javascript:;" onClick={handleMobileMenuToggle}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
