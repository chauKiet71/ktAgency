import styles from "../Webstite/Website.module.css"
import Header from "../../../header/Header"
import Footer from "../../../footer/Footer"
import banner from "../../../assets/bannerads.jpg"
import banner2 from "../../../assets/bannerhome1.jpg"

import cate1 from "../../../assets/website/cvd-compressed.jpg"
import cate2 from "../../../assets/website/image-46-compressed.jpg"
import cate3 from "../../../assets/website/nganh-ban-hang-online.jpg"
import cate4 from "../../../assets/website/nganh-bat-dong-san.jpg"
import cate5 from "../../../assets/website/nganh-du-lich.jpg"
import cate6 from "../../../assets/website/nganh-noi-that-1.jpg"
import cate7 from "../../../assets/website/nganh-xay-dung.jpg"
import cate8 from "../../../assets/website/web-tin-tuc.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Website = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };


    return (
        <>
            <Header />

            <img src={banner} style={{ width: '100%' }} alt="" />

            {/* section1 */}
            <section className={styles.section1}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.contentSection1}>
                                <h1>DỊCH VỤ THIẾT KẾ WEBSITE</h1>
                                <p>Dịch vụ thiết kế website chuyên nghiệp chính là chìa khóa giúp doanh nghiệp bứt phá trong kỷ nguyên số. Chúng tôi mang đến giải pháp thiết kế chuyên nghiệp, tối ưu trải nghiệm người dùng và chuẩn SEO, giúp thương hiệu của bạn nổi bật, thu hút khách hàng và nâng cao hiệu quả kinh doanh trực tuyến.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className={styles.boxBanner}>
                                <img src={banner2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className={styles.section2}>
                <div className="container">
                    <h1 className={styles.titleSection2}>THIẾT KẾ WEB <span>ĐA NGÀNH</span></h1>
                    {/* slider */}
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <div className={styles.boxCategory}>
                                    <img src={cate1} alt="" />
                                    <span>Thời Trang</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate2} alt="" />
                                    <span>Mỹ phẩm</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate3} alt="" />
                                    <span>Bán hàng online</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate4} alt="" />
                                    <span>Bất động sản</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate5} alt="" />
                                    <span>Du lịch</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate6} alt="" />
                                    <span>Nội thất</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate7} alt="" />
                                    <span>Xây dựng</span>
                                </div>
                                <div className={styles.boxCategory}>
                                    <img src={cate8} alt="" />
                                    <span>Tin tức</span>
                                </div>

                            </Slider>
                        </div>
                    </div>

                </div>

            </section>
            {/* section 3 */}
            <section className={styles.section3}>
                <div className="container">
                    <div className={styles.contentSection3}>
                        <h1>Bảng Giá Thiết Kế Website</h1>
                        <p>Chúng tôi cung cấp các gói thiết kế web với mức giá cạnh tranh trên thị trường.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.combo}>
                                <div className={styles.comboTitle}>
                                    <span>Gói cơ bản</span>
                                    <h2>6.000.000đ</h2>
                                </div>
                                <div className={styles.comboBody}>
                                    <p>Website cơ bản</p>
                                    <p>Giỏ hàng</p>
                                    <p>Tặng tên miền .com .net</p>
                                    <p>SSL Security: có</p>
                                    <p>Cấu trúc chuẩn SEO Google</p>
                                    <p>Tặng 3 thiết kế banner</p>
                                    <p>Responsive: Hiển thị PC/Tablet/Mobile</p>
                                    <p>Bảo hành: vĩnh viễn nếu dùng hosting bên mình</p>
                                    <div className={styles.btnLienHe}>
                                        <button>LIÊN HỆ TƯ VẤN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Website