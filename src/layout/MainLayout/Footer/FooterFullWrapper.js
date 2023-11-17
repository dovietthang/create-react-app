// assets
// import { Link } from 'react-router-dom';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const FooterFullWrapper = () => {
  return (
    <div className="footer-full wrapper">
      <div className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-md-2">
              <div
                className="footer-logo text-center text-lg-left"
                data-aos="slide-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <img src="assets/Style/wp-content/themes/southteam/images/logo-black.png" alt="Thiết kế Website chuyên nghiệp" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="footer-top-content" data-aos="slide-left" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
                <h3>CHUYÊN THIẾT KẾ WEBSITE CHUYÊN NGHIỆP, ĐẸP MẮT, CHUẨN SEO</h3> South Team là đội ngũ thiết kế web chuyên nghiệp uy tín,
                áp dụng mọi công nghệ tiên tiến nhất hiện nay. Tương thích với mọi thiết bị, dễ dàng lên TOP google. Không bình thường là
                một website, giá trị chúng tôi đem lại cho khách hàng của mình là sự hiệu quả của khi tiếp cận khách hàng trên Internet
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-widget">
              <h3 className="widget-title">LIÊN HỆ</h3>
              <div className="widget-content">
                <ul className="contactbox">
                  <li>
                    <h3>Công ty TNHH TM- DV SOUTH TEAM</h3>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>{' '}
                    <a href="lien-he.html" rel="nofollow">
                      318/16A Phan Văn Trị, P.11, Bình Thạnh, TP.HCM{' '}
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>{' '}
                    <a href="tel:0938049434" rel="nofollow">
                      0938.049.434
                    </a>{' '}
                    - <i className="fa fa-mobile-phone"></i>{' '}
                    <a href="tel:0367559981" rel="nofollow">
                      0367 55 99 81 (Zalo)
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{' '}
                    <a href="mailto:nampham@southteam.vn" rel="nofollow">
                      nampham@southteam.vn
                    </a>
                  </li>
                  <li>
                    {' '}
                    <i className="fa fa-envelope"></i>{' '}
                    <a href="mailto:contact@southteam.vn" rel="nofollow">
                      contact@southteam.vn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-widget">
              <h3 className="widget-title">DỊCH VỤ</h3>
              <div className="widget-content widget-service">
                <ul>
                  <li>
                    <a href="dich-vu/google-adwords.html" title="Google Ads">
                      Google Ads
                    </a>
                  </li>
                  <li>
                    <a href="dich-vu/marketing-online.html" title="Marketing Online">
                      Marketing Online
                    </a>
                  </li>
                  <li>
                    <a href="dich-vu/dich-vu-quan-tri-website.html" title="Quản trị Website">
                      Quản trị Website
                    </a>
                  </li>
                  <li>
                    <a href="dich-vu/thiet-ke-website.html" title="Thiết kế Website">
                      Thiết kế Website
                    </a>
                  </li>
                  <li>
                    <a href="dich-vu/viet-bai-chuan-seo.html" title="Viết bài chuẩn SEO">
                      Viết bài chuẩn SEO
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-widget">
              <h3 className="widget-title">HỖ TRỢ</h3>
              <div className="widget-content widget-support">
                <ul>
                  <li>
                    <a href="lien-he.html" title="Liên hệ">
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="bang-gia-thiet-ke-website.html" title="Bảng giá">
                      Bảng giá
                    </a>
                  </li>
                  <li>
                    <a href="ho-tro.html" title="Hỗ trợ">
                      Hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a href="tin-tuc/index.html" title="Tin tức">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="dieu-khoan-va-chinh-sach.html" title="quy định chung">
                      Quy định chung
                    </a>
                  </li>
                  <li>
                    <a href="chinh-sach-bao-mat.html" title="Chính sách bảo mật">
                      Chính sách bảo mật
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-widget">
              <h3 className="widget-title">THIẾT KẾ WEB CHUYÊN NGHIỆP</h3>
              <div className="widget-content">
                <li>
                  <a
                    href="thiet-ke-website-chuyen-nghiep-chuan-seo/index.html"
                    title="Thiết kế Website chuyên nghiệp chuẩn SEO &#8211; Bảng giá webiste trọn gói"
                  >
                    Thiết kế Website chuyên nghiệp chuẩn SEO &#8211; Bảng giá webiste trọn gói
                  </a>
                </li>
                <li>
                  <a
                    href="cong-ty-thiet-ke-web-uy-tin-tai-tphcm-southteam-di-len-tu-chat-luong-uy-tin/index.html"
                    title="Công ty thiết kế web uy tín tại TPHCM &#8211; Southteam đi lên từ chất lượng &#038; uy tín"
                  >
                    Công ty thiết kế web uy tín tại TPHCM &#8211; Southteam đi lên từ chất lượng &#038; uy tín
                  </a>
                </li>
                <li>
                  <a
                    href="thiet-ke-website-van-chuyen-moi-thu-tren-the-gioi-deu-den-ben-ban/index.html"
                    title="Thiết Kế Website Vận Chuyển &#8211; Mọi thứ trên thế giới đều đến bên bạn"
                  >
                    Thiết Kế Website Vận Chuyển &#8211; Mọi thứ trên thế giới đều đến bên bạn
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFullWrapper;
