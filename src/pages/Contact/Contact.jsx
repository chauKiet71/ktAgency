import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import styles from "../Contact/Contact.module.css"

import { FaLinkedin, FaFacebook, FaTiktok, FaClock, FaPhone } from "react-icons/fa6";
import { useState } from "react";
import Flash from "../../assets/flash.png"


const Contact = () => {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     service: "",
    //     message: ""
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch("https://script.google.com/macros/s/AKfycbxbjlTqjLb8vHMD4Fxtrn8ejk3TQQAoV7UL3bglQ1ISVaOmuZVslgwOhjTb3XUKcZCo/exec", {
    //         method: "POST",
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const result = await response.json();
    //     if (result.result === "success") {
    //         alert("Gửi thành công!");
    //     } else {
    //         alert("Lỗi khi gửi. Vui lòng thử lại.");
    //     }
    // };

    return (
        <>
            <Header />
            <div className="container mt-3 mb-5">
                <h1 className={styles.title}>THÔNG TIN LIÊN HỆ</h1>
                <div className="row">
                    <div className="col-lg-6 mt-3">
                        <form action="https://formspree.io/f/xyzwdeya" method="POST" className={styles.contactForm} >


                            <input type="text" name="fullName" placeholder="Họ tên" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="text" name="phone" placeholder="Số điện thoại" />
                            <select name="service" defaultValue="choose">
                                <option value="choose">Chọn dịch vụ</option>
                                <option value="web">Thiết kế website</option>
                                <option value="seo">Dịch vụ SEO</option>
                                <option value="ads">Quảng cáo Google/Facebook</option>
                            </select>
                            <textarea name="message" placeholder="Nội dung tin nhắn"></textarea>


                            <div className={styles.btnSend}>
                                <button type="submit"> <img src={Flash} alt="" /> Yêu cầu tư vấn <span>miễn phí</span></button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 mt-3">
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