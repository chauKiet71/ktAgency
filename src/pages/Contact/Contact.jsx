import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import styles from "../Contact/Contact.module.css"

import { FaLinkedin, FaFacebook, FaTiktok, FaClock, FaPhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className={styles.title}>THÔNG TIN LIÊN HỆ</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <form className={styles.contactForm} action="">

                            {/* <div className={styles.row}> */}
                            <input type="text" placeholder="Họ tên" />
                            <input type="email" placeholder="Email" />
                            {/* </div> */}
                            <input type="text" placeholder="Số điện thoại" />
                            <select>
                                <option disabled selected>Chọn dịch vụ</option>
                                <option value="web">Thiết kế website</option>
                                <option value="seo">Dịch vụ SEO</option>
                                <option value="ads">Quảng cáo Google/Facebook</option>
                            </select>

                            <textarea placeholder="Nội dung tin nhắn"></textarea>

                            <div className={styles.btnSend}>
                                <button>Gửi</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.boxInfo}>
                            <div className={styles.boxIcon}><FaPhone /></div>
                            <div className={styles.boxContent}>
                                <p>ĐIỆN THOẠI</p>
                                <span>0327142982</span>
                            </div>
                        </div>
                        <div className={styles.boxInfo}>
                            <div className={styles.boxIcon}>
                                <FaClock />
                            </div>
                            <div className={styles.boxContent}>
                                <span>Thời gian làm việc:</span>
                                <span>Thứ 2 - Chủ nhật: 9:00 - 23:00</span>
                            </div>
                        </div>

                        <div className={styles.boxSocial}>
                            <h3>THEO DÕI CHÚNG TÔI</h3>
                            <div className={styles.socialIcon}>
                                <div className={styles.icon}>
                                    <FaFacebook />
                                </div>
                                <div className={styles.icon}>
                                    <FaTiktok />
                                </div>
                                <div className={styles.icon}>
                                    <FaLinkedin />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact