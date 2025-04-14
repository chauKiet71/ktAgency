import Service from "../../assets/service.jpg"
import Banner1 from "../../assets/banner.png"
import Person from "../../assets/person.jpg"
import News from "../../assets/news.png"
import { FaUserPlus, FaUsers, FaBuffer, FaLaptop, FaStar } from "react-icons/fa";

import { Link } from "react-router-dom"
import styles from "../Home/Home.module.css"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
const Home = () => {
    return (
        <>
            <Header />
            {/* banner */}

            {/* section 1 */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Banner1} style={{ width: '100%' }} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.contentSection1}>
                                <h1>Tại sao bạn cần chọn
                                    Vina software?</h1>
                                <p>VNS cung cấp dịch vụ Thiết kế website trọn gói với giao diện đẹp, độc đáo, sáng tạo là Đơn vị chuyên tư vấn và triển khai hoạt động Marketing số với nền tảng Google , Facebook mang tính ứng dụng cao và phù hợp với từng cá nhân, doanh nghiệp. Với mục tiêu cung cấp nhiều gói sản phẩm phong phú về mẫu mã và các tính năng linh hoạt cho nhiều loại hình website như giới thiệu công ty, bán hàng, trang tin tức, thương mại điện tử… cùng với nhiều giao diện phong phú đa dạng độc đáo đã được VNS lọc chọn và đúc kết nhằm giới thiệu tới khách hàng với mong muốn có một website nhanh, đẹp, hiệu quả và giá cả hợp lý.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}

            <section className={styles.section2}>
                <div className="container">
                    <h1>DỊCH VỤ CỦA CHÚNG TÔI</h1>
                    <div className="row">
                        <div className="col-lg-3">
                            <Link>
                                <div className={styles.boxService}>
                                    <div className={styles.hoverImage}>
                                        <img src={Service} style={{ width: '100%' }} alt="" />
                                        <div className={styles.backgroundText}>
                                            <p>DỊCH VỤ THIẾT KẾ WEBSITE</p>
                                        </div>
                                    </div>
                                    <span>DỊCH VỤ THIẾT KẾ WEBSITE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link>
                                <div className={styles.boxService}>
                                    <div className={styles.hoverImage}>
                                        <img src={Service} style={{ width: '100%' }} alt="" />
                                        <div className={styles.backgroundText}>
                                            <p>DỊCH VỤ THIẾT KẾ WEBSITE</p>
                                        </div>
                                    </div>
                                    <span>DỊCH VỤ THIẾT KẾ WEBSITE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link>
                                <div className={styles.boxService}>
                                    <div className={styles.hoverImage}>
                                        <img src={Service} style={{ width: '100%' }} alt="" />
                                        <div className={styles.backgroundText}>
                                            <p>DỊCH VỤ THIẾT KẾ WEBSITE</p>
                                        </div>
                                    </div>
                                    <span>DỊCH VỤ THIẾT KẾ WEBSITE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link>
                                <div className={styles.boxService}>
                                    <div className={styles.hoverImage}>
                                        <img src={Service} style={{ width: '100%' }} alt="" />
                                        <div className={styles.backgroundText}>
                                            <p>DỊCH VỤ THIẾT KẾ WEBSITE</p>
                                        </div>
                                    </div>
                                    <span>DỊCH VỤ THIẾT KẾ WEBSITE</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3 */}

            <section className={styles.section3}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={styles.showExperience}>
                                <FaUserPlus />
                                <span>500+</span>
                                <p>KHÁCH HÀNG</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.showExperience}>
                                <FaLaptop />
                                <span>300+</span>
                                <p>ĐƯỢC TỐI ƯU</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.showExperience}>
                                <FaBuffer />
                                <span>100%</span>
                                <p>HÀI LÒNG</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={styles.showExperience}>

                                <FaUsers />
                                <span>5+</span>
                                <p>KINH NGHIỆM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}

            <section className={styles.section4}>
                <div className="container">
                    <h1>KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.boxFeedback}>
                                <div className={styles.boxTop}>
                                    <img src={Person} alt="" />
                                    <div className={styles.boxStar}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={styles.boxCenter}>
                                    <h2>"Chạy quảng cáo Facebook"</h2>
                                    <p>Tôi đặc biết ấn tượng với dịch vụ khách hàng chuyên nghiệp và chu đáo của họ. Họ luôn sẵn sàng tư vấn và giúp tôi  tìm ra những vẫn đề cần được xử lí cho phù hợp với phong cách của tôi</p>
                                </div>
                                <div className={styles.boxBottom}>
                                    <div className={styles.content}>
                                        <h6>Nguyễn Thị Mai</h6>
                                        <p>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.boxFeedback}>
                                <div className={styles.boxTop}>
                                    <img src={Person} alt="" />
                                    <div className={styles.boxStar}>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className={styles.boxCenter}>
                                    <h2>"Chạy quảng cáo Facebook"</h2>
                                    <p>Tôi đặc biết ấn tượng với dịch vụ khách hàng chuyên nghiệp và chu đáo của họ. Họ luôn sẵn sàng tư vấn và giúp tôi  tìm ra những vẫn đề cần được xử lí cho phù hợp với phong cách của tôi</p>
                                </div>
                                <div className={styles.boxBottom}>
                                    <div className={styles.content}>
                                        <h6>Nguyễn Thị Mai</h6>
                                        <p>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section 5 */}

            <section className={styles.section5}>
                <div className="container">
                    <h1>TIN TỨC</h1>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.boxnews}>
                                <img src={News} alt="" />
                                <div className={styles.contentNews}>
                                    <h6>Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website</h6>
                                    <p>Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay</p>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.boxnews}>
                                <img src={News} alt="" />
                                <div className={styles.contentNews}>
                                    <h6>Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website</h6>
                                    <p>Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay</p>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.boxnews}>
                                <img src={News} alt="" />
                                <div className={styles.contentNews}>
                                    <h6>Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website</h6>
                                    <p>Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay</p>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Home