import styles from "../LandingPage/LandingPage.module.css"
import "../LandingPage/LandingPage.css"
import Header from "../../../header/Header"
import Footer from "../../../footer/Footer"
import bannerLadi from "../../../assets/bannerLadi.png"
import bannerLadi2 from "../../../assets/bannerlanding2.jpg"
import banner from "../../../assets/bannerads.jpg"

import mau1 from "../../../assets/landing/mau1.png"
import mau2 from "../../../assets/landing/mau2.png"
import mau3 from "../../../assets/landing/mau3.png"
import mau4 from "../../../assets/landing/mau4.png"
import mau5 from "../../../assets/landing/mau5.png"

import banhang1 from "../../../assets/landing/banhang1.png"
import banhang2 from "../../../assets/landing/banhang2.png"
import banhang3 from "../../../assets/landing/banhang3.png"
import banhang4 from "../../../assets/landing/banhang4.png"
import banhang5 from "../../../assets/landing/banhang5.png"

import gioithieu1 from "../../../assets/landing/gioithieu1.jpg"
import gioithieu2 from "../../../assets/landing/gioithieu2.jpg"
import gioithieu3 from "../../../assets/landing/gioithieu3.jpg"
import gioithieu4 from "../../../assets/landing/gioithieu4.jpg"
import gioithieu5 from "../../../assets/landing/gioithieu5.jpg"

import lead1 from "../../../assets/landing/lead1.jpg"
import lead2 from "../../../assets/landing/lead2.jpg"
import lead3 from "../../../assets/landing/lead3.jpg"
import lead4 from "../../../assets/landing/lead4.jpg"
import lead5 from "../../../assets/landing/lead5.jpg"

import { FaCheck } from "react-icons/fa";
import { useState } from "react"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>

            <Header />
            <img src={banner} style={{ width: '100%' }} alt="" />
            {/* section 1 */}
            <section className={styles.section1}>
                <div className="container">
                    <div className={styles.boxReason}>
                        <div className="row">
                            <div className="col-lg-6">
                                <img style={{ width: '100%' }} src={bannerLadi} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.contentReason}>
                                    <h1>Lý do bạn nên có Landing Page chỉ với mục đích duy nhất </h1><br /> <span className={styles.highlight}>Đó là CHUYỂN ĐỔI</span>
                                    <br />
                                    <br />
                                    <p>Việc tập trung từng tệp khách hàng, từng sản phẩm/dịch vụ, <strong>Landing Page giúp bạn đánh đúng tâm lý người dùng, tăng tỉ lệ bán hàng.</strong></p>
                                    <p><span>Tối ưu</span> đối tượng chạy quảng cáo</p>
                                    <p><span>Tiết kiệm </span>chi phí quảng cáo</p>
                                    <p><span>Tăng </span>chuyển đổi, tăng số lead Tăngsố lead</p>
                                    <p><span>Dễ dàng đo lường </span>hiệu suất trang</p>
                                    <p><span>An toàn </span>quản lí dữ liệu khách hàng</p>
                                    <p>Tiếp đón khách hàng <span>24/7, tăng tỉ lệ chốt sales</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 2 */}

            <section className={styles.section2}>
                <div className="container">
                    <div className={styles.titleSection2}>
                        <h1>Các landing page của chúng tôi</h1>
                        <h2>Đều được tối ưu cho tỷ lệ chuyển đổi cao nhất</h2>
                    </div>
                    <img src={bannerLadi2} alt="" />
                </div>
            </section>


            {/* section 4 */}

            <section className={styles.section4}>
                <div className="container" style={{ padding: '40px 100px' }}>
                    <h1>Sở hữu 500+ <br /> <span>mẫu landing page đẹp</span></h1>
                    <p className={styles.content}>Tổng hợp các loại landing page phổ biến – dễ dùng – tối ưu chuyển đổi, kèm mẫu tham khảo cho từng loại.

                    </p>
                    <div className={styles.showLanding}>
                        <ul className={styles.tabs}>
                            <li
                                className={activeIndex === 0 ? styles.active : ""}
                                onClick={() => setActiveIndex(0)}
                            >
                                Landing page Tiktok
                            </li>
                            <li
                                className={activeIndex === 1 ? styles.active : ""}
                                onClick={() => setActiveIndex(1)}
                            >
                                Landing page Bán hàng
                            </li>
                            <li
                                className={activeIndex === 2 ? styles.active : ""}
                                onClick={() => setActiveIndex(2)}
                            >
                                Landing page thu lead
                            </li>
                            <li
                                className={activeIndex === 3 ? styles.active : ""}
                                onClick={() => setActiveIndex(3)}
                            >
                                Landing page giới thiệu
                            </li>
                        </ul>

                        {/* Nội dung tương ứng */}
                        <div className="tabContent">
                            {activeIndex === 0 && (
                                <div>
                                    <div className={styles.boxLanding}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2>Landing page TikTok</h2>
                                                <p><strong>Tạo landing page cho: </strong>Thời trang - Phụ kiện, Mỹ phẩm, Khóa học,Thẩm mỹ viện, Thực phẩm,...</p>
                                                <p><strong>Mục đích sử dụng:</strong> chạy quảng cáo bán hàng trên TikTok có thu thập số điện thoại để gọi xác nhận gửi hàng</p>
                                                <p><FaCheck /> Thu số điện thoại khách hàng bán trực tiếp</p>
                                                <p><FaCheck /> Không mất phí hoa hồng đơn hàng</p>
                                                <p><FaCheck /> Chạy Ads bán hàng không cần chờ xây kênh</p>
                                                <button className={styles.btnLienHe}>LIÊN HỆ TƯ VẤN</button>
                                            </div>
                                            <div className="col-lg-6">
                                                <Slider {...settings}>
                                                    <div>
                                                        <img src={mau1} style={{ width: '100%' }} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={mau2} style={{ width: '100%' }} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={mau3} style={{ width: '100%' }} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={mau4} style={{ width: '100%' }} alt="" />
                                                    </div>
                                                    <div>
                                                        <img src={mau5} style={{ width: '100%' }} alt="" />
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeIndex === 1 && (
                                <div className={styles.boxLanding}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2>Landing page Bán hàng</h2>
                                            <p><strong>Tạo landing page cho: </strong>Quần Áo - Phụ kiện thời trang, Mỹ phẩm, Gia dụng, Đồng hồ, Trang sức,...                                            </p>
                                            <p><strong>Mục đích sử dụng:</strong> chạy quảng cáo Facebook, Google, Zalo điều hướng khách bấm vào đường link để đặt đơn trực tiếp</p>
                                            <p><FaCheck /> Đón khách vào đặt đơn trực tiếp trên trang, chỉ cần gọi xác nhận gửi hàng</p>
                                            <p><FaCheck /> Tiết kiệm nhân lực và thời gian trực page chat khách</p>
                                            <p><FaCheck /> Đổ thông tin đặt hàng về một nơi không để đối thủ cướp khách trong bình luận</p>
                                            <button className={styles.btnLienHe}>LIÊN HỆ TƯ VẤN</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Slider {...settings}>
                                                <div>
                                                    <img src={banhang1} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={banhang2} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={banhang3} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={banhang4} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={banhang5} style={{ width: '100%' }} alt="" />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeIndex === 2 && (
                                <div className={styles.boxLanding}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2>Landing Page Thu lead</h2>
                                            <p><strong>Tạo landing page cho: </strong>Khóa học - Giáo dục, Spa, Phòng tập Gym - Yoga, Du lịch, Bất động sản,...                                            </p>
                                            <p><strong>Mục đích sử dụng:</strong> Thu thập thông tin khách hàng tiềm năng (Họ tên, Số điện thoại, Email,...) làm phễu Marketing cho đội Sales liên hệ tư vấn</p>
                                            <p><FaCheck /> Đổ data ngay sau khi khách hàng điền form về lưu trữ ngay</p>
                                            <p><FaCheck /> Dùng 1 landing page thu data khách hàng đa kênh: Facebook, Google, Zalo, TikTok</p>
                                            <p><FaCheck /> Tối ưu trải nghiệm mở web trên mobile</p>
                                            <button className={styles.btnLienHe}>LIÊN HỆ TƯ VẤN</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Slider {...settings}>
                                                <div>
                                                    <img src={lead1} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={lead2} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={lead3} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={lead4} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={lead5} style={{ width: '100%' }} alt="" />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeIndex === 3 && (
                                <div className={styles.boxLanding}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2>Landing Page Giới thiệu</h2>
                                            <p><strong>Tạo landing page cho: </strong>Luật, Tài chính, Nội thất, Agency, Cuộc thi, Triển lãm, Du lịch, In ấn,...</p>
                                            <p><strong>Mục đích sử dụng:</strong> Đăng lên mạng xã hội (Fanpage, Zalo, Bio TikTok,...) giới thiệu công ty; ra mắt sản phẩm mới; truyền thông sự kiện</p>
                                            <p><FaCheck /> Tiết kệm chi phí so với thuê làm website</p>
                                            <p><FaCheck /> Chủ động sửa đổi thông tin và xuất bản bất cứ khi nào miễn phí</p>
                                            <p><FaCheck /> Thiết kế đẹp mắt trong thời gian triển khai ngắn</p>
                                            <button className={styles.btnLienHe}>LIÊN HỆ TƯ VẤN</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <Slider {...settings}>
                                                <div>
                                                    <img src={gioithieu1} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={gioithieu2} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={gioithieu3} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={gioithieu4} style={{ width: '100%' }} alt="" />
                                                </div>
                                                <div>
                                                    <img src={gioithieu5} style={{ width: '100%' }} alt="" />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>




            {/* section 3 */}
            <section>
                <div className="container">
                    <div className={styles.boxContact}>
                        <h1>Bạn đã <span>sẵn sàng trải nghiệm?</span></h1>
                        <p>Hãy nói cho chúng tôi biết nhu cầu của bạn</p>
                        <p>Chúng tôi sẽ mang tới dịch vụ tốt nhất và phù hợp nhất với nhu cầu của bạn!</p>

                        <div className={styles.btnContact}>
                            <button>Nhận báo giá chi tiết</button>
                            <button>Gọi tư vấn: 0327142982</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default LandingPage