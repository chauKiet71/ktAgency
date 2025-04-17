import styles from "../Facebook/Facebook.module.css"
import Header from "../../../header/Header"
import Footer from "../../../footer/Footer"
import MyVerticallyCenteredModal from "../../Components/Model/MyVerticallyCenteredModal"

import bannerads from "../../../assets/bannerads.jpg"
import iconfb1 from "../../../assets/facebook/iconfb1.png"
import iconfb2 from "../../../assets/facebook/iconfb2.png"
import iconfb3 from "../../../assets/facebook/iconfb3.png"
import { FaFacebookSquare, FaBullhorn, FaShieldAlt, FaRegHandPointUp, FaRegTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useState } from "react"

const Facebook = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Header />

            <img src={bannerads} style={{ width: '100%' }} alt="" />
            {/* section 1 */}
            <section className={styles.section1}>

                <div className="container">
                    <div className={styles.contentSection1}>
                        <h6>Về Vina software</h6>
                        <h1>Đơn vị dẫn đầu về dịch vụ Facebook <br /> <span>chuyên sâu </span></h1>
                        <p>HAP Media tự hào là đơn vị hàng đầu trong lĩnh vực cung cấp dịch vụ Facebook với hơn 5 năm kinh nghiệm, hỗ trợ thành công 20,000 khách hàng. Chúng tôi chuyên cung cấp các giải pháp như: lên tích xanh Fanpage/Profile, khôi phục tài khoản bị hack, tăng tương tác và bảo mật tài khoản.</p>
                    </div>
                </div>
            </section>

            {/* section 2 */}

            <section className={styles.section2}>
                <div className="container">
                    <h1>Dịch vụ hỗ trợ <br /> Chuyên sâu hàng đầu Việt Nam</h1>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaFacebookSquare />
                                    </div>
                                    <div>
                                        <h6>Dịch vụ lấy lại Facebook</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Khôi phục tài khoản & Fanpage/Group. Lấy lại Facebook bị mất quyền kiểm soát một cách nhanh chống an toàn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaBullhorn />
                                    </div>
                                    <div>
                                        <h6>Quảng cáo Facebook</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Dịch vụ quảng cáo và chiến lược chuyên sâu, tăng doanh thu và thúc đẩy thương hiệu phát triển bền vững.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaRegHandPointUp />
                                    </div>
                                    <div>
                                        <h6>Tăng tương tác</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Tăng tương tác hiệu quả: Nâng cao lượt thích, bình luận và chia sẻ giúp thương hiệu của bạn nổi bật hơn bao giờ hết.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaShieldAlt />
                                    </div>
                                    <div>
                                        <h6>Bảo mật Facebook</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Khôi phục tài khoản & Fanpage/Group. Lấy lại Facebook bị mất quyền kiểm soát một cách nhanh chống an toàn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <h6>Lên tích xanh</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Dịch vụ quảng cáo và chiến lược chuyên sâu, tăng doanh thu và thúc đẩy thương hiệu phát triển bền vững.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection2}>
                                <div className={styles.contentTitle}>
                                    <div className={styles.boxIcon}>
                                        <FaRegTimesCircle />
                                    </div>
                                    <div>
                                        <h6>Xử lí khủng hoảng</h6>
                                    </div>
                                </div>
                                <div className={styles.contentBody}>
                                    <p>Đối với các tài khoản bị người khác mạo danh thì cần được xử lí một cách nhanh chóng để bảo vệ thương hiệu của mình.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.boxTuVan}>
                    <span>Hãy để đội ngũ chuyên gia tư vấn cho bạn.</span>
                    {/* <button>Đăng ký tư vấn</button> */}
                    <button className={styles.pulseButton} onClick={() => setModalShow(true)}>Đăng ký tư vấn</button>
                </div>
            </section>

            {/* section 3 */}
            <section className={styles.section3}>
                <div className="container">
                    <h1>Tại sao lại chọn dịch vụ facebook của chúng tôi</h1>
                    <p>Với trên 5 năm làm việc trong lĩnh vực Dịch Vụ Facebook được tin dùng bởi hơn 20,000 khách hàng, chúng tôi không ngừng thay đổi nhằm đáp ứng nhu cầu ngày càng cao của khách hàng sử dụng nên tảng Facebook.</p>
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <div className={styles.contentSection3}>
                                <div className="text-center">
                                    <img src={iconfb1} alt="" />
                                </div>
                                <h5>Đội ngũ hỗ trợ chuyên nghiệp</h5>
                                <p>Đội ngũ am hiểu về Digital Marketing và Dịch Vụ Facebook chuyên sâu, tư vấn tận tâm hỗ trợ 24/24.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection3}>
                                <div className="text-center">
                                    <img src={iconfb2} alt="" />
                                </div>
                                <h5>Bảo mật thông tin</h5>
                                <p>Thông tin quý khách hàng và doanh nghiệp cung cấp được chúng tôi giữ bí mật và bảo mật tuyệt đối​.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.contentSection3}>
                                <div className="text-center">
                                    <img src={iconfb3} alt="" />
                                </div>
                                <h5>Tiết kiệm chi phí</h5>
                                <p>Chúng tôi cam kết khi khách hàng sử dụng dịch vụ facebook uy tín giá rẻ nhất thị trường hiện nay.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
export default Facebook 