// assets
// import { Link } from 'react-router-dom';
import qt from 'assets/Style/wp-content/themes/southteam/images/qt.png';
import qt2 from 'assets/Style/wp-content/themes/southteam/images/qt2.png';
import qt3 from 'assets/Style/wp-content/themes/southteam/images/qt3.png';
import qt4 from 'assets/Style/wp-content/themes/southteam/images/qt4.png';
import qt5 from 'assets/Style/wp-content/themes/southteam/images/qt5.png';

// ==============================|| Section2 ||============================== //

const Section2 = () => {
  return (
    <section id="why-choose-us">
      <div className="container">
        <div className="why-left text-center">
          <h2 className="red text-shadown">Quy trình làm việc chuyên nghiệp</h2>
          <p className="text">
            Sở hữu hàng trăm mẫu giao diện thiết kế hiện đại, tích hợp đầy đủ chức năng giúp bạn có thể dễ dàng thao tác chỉnh sửa theo mong
            muốn. Website dễ dàng lên TOP Google trong lần đầu submit. Cam kết không phát sinh bất kì thêm chi phí nào.
          </p>
          <div className="why-modul">
            <div className="row">
              <div className="col-md col-6">
                <div className="process-step mb-3" data-aos="fade-right" data-aos-duration="1500">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="st-icon step1-icon">
                        <img src={qt} className="img-fluid logo" alt="Thiết kế Website chuyên nghiệp uy tín" />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="step-ct st1">
                        <span>
                          Tìm hiểu và tư vấn
                          <br /> xây dựng Website
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-6">
                <div className="process-step mb-3" data-aos="fade-right" data-aos-duration="1500">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="st-icon step2-icon">
                        <img src={qt2} alt="Thiết kế Website tại tphcm" />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="step-ct st2">
                        <span>
                          Báo giá, tạo ý tưởng <br />
                          &amp; Demo giao diện Website
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-6">
                <div className="process-step mb-3" data-aos="fade-bottom" data-aos-duration="1500">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="st-icon step3-icon">
                        <img src={qt3} alt="Thiết kế Website uy tín" />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="step-ct st3">
                        <span>
                          Ký hợp đồng <br />
                          thiết kế Website
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md col-6">
                <div className="process-step mb-3" data-aos="fade-left" data-aos-duration="1500">
                  <div className="row">
                    <div className="col-md-12 col-ms-12 col-xs-12">
                      <div className="st-icon step4-icon">
                        <img src={qt4} alt="Thiết kế Website uy tín giá rẻ tại tphcm" />
                      </div>
                    </div>
                    <div className="col-md-12 col-ms-12 col-xs-12">
                      <div className="step-ct st4">
                        <span>
                          Xây dựng Module <br />
                          &amp; hoàn thiện Website
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="process-step" data-aos="fade-left" data-aos-duration="1500">
                  <div className="row">
                    <div className="col-md-12 col-ms-12 col-xs-12">
                      <div className="st-icon step5-icon">
                        <img src={qt5} alt="Nghiệm thu thanh lý hợp đồng" />
                      </div>
                    </div>
                    <div className="col-md-12 col-ms-12 col-xs-12">
                      <div className="step-ct st5">
                        <span>
                          Nghiệm thu, thanh lý HĐ <br />
                          &amp; Chuyển giao công nghệ
                        </span>
                      </div>
                    </div>
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

export default Section2;
