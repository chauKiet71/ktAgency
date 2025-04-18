import styles from "./Website.module.css"
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
import imageHot from "../../../assets/iconhot.png"
import { FaCircleCheck } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MyVerticallyCenteredModal from "../../Components/Model/MyVerticallyCenteredModal"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import clsx from "clsx"
import { s } from "framer-motion/client"


const Website = () => {
    const [modalShow, setModalShow] = useState(false);

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
        },
        responsive: [
            {
                breakpoint: 576, // dưới 576px (mobile)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };



    return (
        <>
            <Header />

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate1} alt="" />
                                        <span>Thời Trang</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate2} alt="" />
                                        <span>Mỹ phẩm</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate3} alt="" />
                                        <span>Bán hàng online</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate4} alt="" />
                                        <span>Bất động sản</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate5} alt="" />
                                        <span>Du lịch</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate6} alt="" />
                                        <span>Nội thất</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate7} alt="" />
                                        <span>Xây dựng</span>
                                    </div>
                                </div>
                                <div className={styles.slideItem}>
                                    <div className={styles.boxCategory}>
                                        <img src={cate8} alt="" />
                                        <span>Tin tức</span>
                                    </div>
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
                        <div className={clsx("col-lg-4 mt-4", styles.hot)}>
                            <div className={styles.combo}>
                                <div className={styles.comboTitle}>
                                    <span>Gói cơ bản</span>
                                    <h2>6.000.000đ</h2>
                                </div>
                                <div className={styles.comboBody}>
                                    <p>Website cơ bản</p>
                                    <p>Tìm kiếm cơ bản</p>
                                    <p>Tặng tên miền .com .net</p>
                                    <p>SSL Security: có</p>
                                    <p>Cấu trúc chuẩn SEO Google</p>
                                    <p>Tặng 1 thiết kế banner</p>
                                    <p>Responsive: Hiển thị PC/Tablet/Mobile</p>
                                    <p>Bảo hành: vĩnh viễn nếu dùng hosting bên mình</p>

                                    <div className={styles.btnLienHe}>
                                        <button variant="primary" onClick={() => setModalShow(true)}>LIÊN HỆ TƯ VẤN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx("col-lg-4 mt-4 position-relative", styles.hot)}>
                            <img src={imageHot} className={styles.imageHot} alt="" />
                            <div className={styles.combo}>
                                <div className={styles.comboTitle}>
                                    <span>Gói phổ thông</span>
                                    <h2>9.000.000đ</h2>
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
                                        <button variant="primary" onClick={() => setModalShow(true)}>LIÊN HỆ TƯ VẤN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx("col-lg-4 mt-4", styles.hot)}>
                            <div className={styles.combo}>
                                <div className={styles.comboTitle}>
                                    <span>Gói Premium</span>
                                    <h2 style={{ fontSize: '32px' }}>Liên hệ báo giá</h2>
                                </div>
                                <div className={styles.comboBody}>
                                    <p>Đăng ký / Đăng nhập</p>
                                    <p>Phân quyền quản trị</p>
                                    <p>Xuất / Nhập Excel</p>
                                    <p>Thiết kế UX/UI</p>
                                    <p>Thanh toán online</p>
                                    <p>Tặng 5 thiết kế banner</p>
                                    <p>Responsive: Hiển thị PC/Tablet/Mobile</p>
                                    <p>Bảo hành: vĩnh viễn nếu dùng hosting bên mình</p>

                                    <div className={styles.btnLienHe}>
                                        <button variant="primary" onClick={() => setModalShow(true)}>LIÊN HỆ TƯ VẤN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}

            <section className={styles.section4}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className={styles.boxQuiTrinhLeft}>
                                <h1>Tổng quan qui trình tạo nên website chất lượng của chúng tôi</h1>
                                <img src={banner2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                            <div className={styles.contentQuiTrinh}>
                                <ul>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B1: Tiếp nhận khách hàng</span>
                                            <p>Bộ phận account tiếp nhận yêu cầu của khách hàng, lắng nghe những vấn đề và nỗi đau khách hàng cần giải quyết</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B2: Nghiên cứu và phân tích yêu cầu</span>
                                            <p>Các phòng ban liên quan sẽ thảo luận và thống nhất giải pháp tối ưu nhất cho những vấn đề của khách hàng.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B3: Phác thảo, thiết kế mềm</span>
                                            <p>Bộ phận thiết kế tiến hành phác thảo bản demo dựa trên yêu cầu và giải pháp thống nhất. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B4: Nhận phản hồi từ khách</span>
                                            <p>MONA sẽ tiếp nhận phản hồi và điều chỉnh bản demo liên tục để phù hợp với nhu cầu của khách hàng</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B5: Tiến hành lập trình</span>
                                            <p>Website được đưa vào giai đoạn lập trình với quy trình phù hợp đảm bảo đúng tiến độ và hoàn thiện tất cả tính năng cũng như giao diện như bản đã thống nhất với khách hàng trong giai đoạn phản hồi.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B6: Audit chuẩn SEO</span>
                                            <p>Xây dựng cấu trúc website chuẩn SEO, tạo các liên kết, gắn mã các công cụ SEO và tool hỗ trợ chất lượng.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B7: Hướng dẫn sử dụng và hỗ trợ</span>
                                            <p>MONA cung cấp bộ hướng dẫn chi tiết riêng cho từng dự án. Đội ngũ hỗ trợ luôn sẵn sàng giải đáp thắc mắc và hỗ trợ thao tác nếu cần thiết để đảm bảo khách hàng quản trị tốt website</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <FaCircleCheck />
                                        </div>
                                        <div className={styles.content}>
                                            <span>B8: Bàn giao dự án</span>
                                            <p>Nguyên tắc hoạt động của phần mềm. Vẫn tiếp tục đồng hành và hỗ trợ nếu khách hàng gặp khó khăn trong việc quản trị website</p>
                                        </div>
                                    </li>

                                </ul>
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