import Logo from "../assets/04media.svg"
import styles from "../footer/Footer.module.css"
const Footer = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-6 col-sm-12  mb-4">
                            {/* <div className={styles.boxLelf}> */}
                            <img src={Logo} alt="VNS Logo" className="img-fluid mb-3" />
                            <p>
                                VNS cung cấp dịch vụ Thiết kế website trọn gói với giao diện đẹp, độc đáo, sáng tạo là Đơn vị chuyên tư vấn và triển khai hoạt động Marketing số với nền tảng Google , Facebook mang tính ứng dụng cao và phù hợp với từng cá nhân, doanh nghiệp.
                                Tận tâm với khách hàng luôn là trách nhiệm của chúng tôi !
                            </p>
                            <p><strong>Địa chỉ:</strong> 42/1 Tân thới nhất 3, Phường Tân Thới Nhất, Quận 12, TP. Hồ Chí Minh</p>
                            <p><strong>Số điện thoại:</strong> 032714982</p>
                            <p><strong>Email:</strong> lck.dev701@gmail.com</p>
                            <p><strong>Thời gian hoạt động:</strong> 9h00 - 23h59</p>
                            <p>Copyright &copy; 2025</p>
                            {/* </div> */}
                        </div>

                        <div className="col-12 col-lg-4 col-md-6 col-sm-12  mb-4">
                            <div className={styles.boxCenter}>
                            <h3>DỊCH VỤ</h3>
                            <p>Chạy quảng cáo Facebook</p>
                            <p>Hỗ trợ Facebook</p>
                            <p>Thiết kế website</p>
                            <p>Thiết kế landing page</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-6 col-sm-12  mb-4">
                            <div className={styles.boxSendInfo}>
                            <h3>CHÍNH SÁCH QUI ĐỊNH</h3>
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật</p>
                            <p>Thoả thuận sử dụng dịch vụ</p>
                            <p>Hỗ trợ khách hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer