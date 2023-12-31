// assets
// import { Link } from 'react-router-dom';
import featured from 'assets/Style/wp-content/themes/southteam/images/featured-1.png';
import bgDo from 'assets/Style/wp-content/uploads/2018/11/bg-do.jpg';

// ==============================|| Section3 ||============================== //

const Section3 = () => {
  const divStyle = {
    backgroundImage: `url(${bgDo})`,
    backgroundSize: '100%',
    padding: '25px 0'
  };
  return (
    <section className="featured">
      <div className="featured-1" style={divStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="featured-content">
                <h3>Giao diện chuyên nghiệp, đẹp mắt</h3>
                <ul>
                  <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    Giao diện cực nhẹ, tải trang cực nhanh
                  </li>
                  <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    Sử dụng các công nghệ tiên tiến cho hiệu ứng bắt mắt
                  </li>
                  <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    Đầy đủ các chức năng, tương thích với mọi thiết bị
                  </li>
                  <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    Chuẩn SEO, lên TOP google ngay lần đầu Submit
                  </li>
                  <li data-aos="slide-right" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    Bảo hành, bảo trì không phát sinh chi phí
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="featured-img" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
                <img src={featured} alt="Thiết kế Website chuyên nghiệp uy tín" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
