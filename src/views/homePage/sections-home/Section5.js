// assets
import { Link } from 'react-router-dom';
import blog8 from 'assets/Style/wp-content/uploads/2017/12/blog8.jpg';
import blog10 from 'assets/Style/wp-content/uploads/2018/10/10.png';
import blog11 from 'assets/Style/wp-content/uploads/2018/10/bg-adsw.jpg';
import blog12 from 'assets/Style/wp-content/uploads/2017/12/adwords.png';
import blog2 from 'assets/Style/wp-content/uploads/2017/12/blog2.jpg';
import blog13 from 'assets/Style/wp-content/uploads/2018/10/cateloge_1.png';
import blog1 from 'assets/Style/wp-content/uploads/2017/12/blog1.jpg';
import blog14 from 'assets/Style/wp-content/uploads/2018/10/34.png';
import blog7 from 'assets/Style/wp-content/uploads/2017/12/blog7.jpg';
import blog15 from 'assets/Style/wp-content/uploads/2018/10/11.png';

// ==============================|| Section5 ||============================== //

const Section5 = () => {
  return (
    <section className="services pt-4 pb-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="section-title">
              <h1 className="rotate-title text-shadown red float-md-right text-center">Dịch vụ</h1>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="block-portfolio ">
                  <Link className="overlay" to="#" target="_blank"></Link>
                  <span className="rotate-status rotate-title">Web Design</span>
                  <img alt="" className="img-responsive" src={blog8} />
                  <img alt="" className="img-additional" src={blog10} />
                  <div className="portfolio-info">
                    <span className="project-name font-weight-bold text-uppercase">Thiết kế Website</span>
                    <span className="project-category text-shadown">Thiết kế hiện đại theo ý tưởng khách hàng</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="block-portfolio">
                  <Link className="overlay" to="#" target="_blank"></Link>
                  <span className="rotate-status rotate-title">Google Adwords</span>
                  <img alt="" className="img-responsive" src={blog11} />
                  <img alt="" className="img-additional" src={blog12} />
                  <div className="portfolio-info fadeInUp animated">
                    <span className="project-name font-weight-bold text-uppercase">Google Adwords</span>
                    <span className="project-category text-shadown">Quảng cáo trên Google</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="block-portfolio">
                  <Link className="overlay" to="#" target="_blank"></Link>
                  <span className="rotate-status rotate-title">Quản trị Website</span>
                  <img alt="" className="img-responsive" src={blog2} />
                  <img alt="" className="img-additional" src={blog13} />
                  <div className="portfolio-info">
                    <span className="project-name font-weight-bold text-uppercase">Quản trị Website</span>
                    <span className="project-category text-shadown">Cập nhật nội dung Website</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="block-portfolio">
                  <Link className="overlay" to="#" target="_blank"></Link>
                  <span className="rotate-status rotate-title">Marketing Online</span>
                  <img alt="" className="img-responsive" src={blog1} />
                  <img alt="" className="img-additional" src={blog14} />
                  <div className="portfolio-info">
                    <span className="project-name font-weight-bold text-uppercase">Marketing Online</span>
                    <span className="project-category text-shadown">Chiến lược tổng thể tiếp cận KH online</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="block-portfolio">
                  <Link className="overlay" to="#" target="_blank"></Link>
                  <span className="rotate-status rotate-title">Viết bài chuẩn SEO</span>
                  <img alt="" className="img-responsive" src={blog7} />
                  <img alt="" className="img-additional" src={blog15} />
                  <div className="portfolio-info">
                    <span className="project-name font-weight-bold text-uppercase">Viết bài chuẩn SEO</span>
                    <span className="project-category text-shadown">Cung cấp bài viết chỉ từ 25000đ/bài</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
