import Logo from "../assets/logo.png"
import styles from "../footer/Footer.module.css"
const Footer = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.boxLelf}>
                                <img src={Logo} alt="" />
                                <p>VNS cung cấp dịch vụ Thiết kế website trọn gói với giao diện đẹp, độc đáo, sáng tạo là Đơn vị chuyên tư vấn và triển khai hoạt động Marketing số với nền tảng Google , Facebook mang tính ứng dụng cao và phù hợp với từng cá nhân, doanh nghiệp.

                                    Tận tâm với khách hàng luôn là trách nhiệm của chúng tôi !
                                    <br />
                                </p>
                                <p><strong>Địa chỉ:</strong> 42/1 Tân thới nhất 3, Phường Tân Thới Nhất, Quận 12,
                                    Thành phồ Hồ Chí Minh</p>
                                <p><strong>Số điện thoại:</strong> 032714982</p>
                                <p><strong>Email:</strong> lck.dev701@gmail.com</p>
                                <p><strong>Thời gian hoạt động:</strong> 9h00 - 23h59</p>

                                Copyright &copy; 2025
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className={styles.boxCenter}>
                                <h3>DỊCH VỤ</h3>
                                <p>Chạy quảng cáo Facebook</p>
                                <p>Hỗ trợ Facebook</p>
                                <p>Thiết kế website</p>
                                <p>Thiết kế landing page</p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className={styles.boxSendInfo}>
                                <h3>GỬI YÊU CẦU BÁO GIÁ DỊCH VỤ</h3>
                                <p>Chúng tôi luôn tư vấn dịch vụ miễn phí. Chúng tôi sẽ liên hệ báo giá theo thông tin mà bạn để lại.</p>

                                <form className={styles.contactForm} action="">

                                    <div className={styles.row}>
                                        <input type="text" placeholder="Họ tên" />
                                        <input type="email" placeholder="Email" />
                                    </div>
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
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer