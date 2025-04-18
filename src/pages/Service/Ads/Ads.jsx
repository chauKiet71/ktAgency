import styles from "../Ads/Ads.module.css"
import Header from "../../../header/Header"
import Footer from "../../../footer/Footer"

import banner from "../../../assets/bannerAds.png"
import ImageContent from "../../../assets/content.jpg"
import ImageDoanhThu from "../../../assets/doanhthu.jpg"
import ImageNganSach from "../../../assets/ngansach_chiphi.jpg"
import ImageCfb from "../../../assets/cfb.jpg"
import ImagePhatHanh from "../../../assets/phathanhnhanh_tangtuongtac.jpg"
import { FaUserClock, FaFacebook, FaRegClock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import bannerads from "../../../assets/bannerads.jpg"
import clsx from "clsx"
import MyVerticallyCenteredModal from "../../Components/Model/MyVerticallyCenteredModal"
import { useState } from "react"

const Ads = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Header />
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <img src={bannerads} style={{ width: '100%' }} alt="" />
            <div className={clsx(styles.ads)}>
                {/* section 1 */}
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mt-4">
                                <div className={styles.boxBanner}>
                                    <img src={banner} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                                <div className={styles.boxContentReason}>
                                    <h1>Tại sao nên chạy quảng cáo Facebook?</h1>
                                    <ul>
                                        <li>
                                            <strong>Facebook:</strong> có hơn 2 tỷ người dùng hàng tháng trên toàn thế giới, tạo ra một cơ hội để tiếp cận một lượng lớn khách hàng tiềm năng.
                                        </li>
                                        <li>
                                            <strong>Lý do nên chạy quảng cáo Facebook:</strong> vì nó mở ra cơ hội tiếp cận hàng triệu khách hàng một cách chính xác thông qua đối tượng, hành vi cụ thể,... Có thể tiếp cận chính xác khách hàng mục tiêu của mình
                                        </li>
                                    </ul>
                                    <button onClick={() => setModalShow(true)}>LIÊN HỆ TƯ VẤN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 2 */}

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mt-4">
                                <div className={styles.boxThongKe}>
                                    <div className={styles.boxLelf}>
                                        <FaUserClock />
                                    </div>
                                    <div className={styles.boxRight}>
                                        <h1>89%</h1>
                                        <p>Tỷ lệ người dùng hoạt động thường xuyên</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <div className={styles.boxThongKe}>
                                    <div className={styles.boxLelf}>
                                        <FaFacebook />
                                    </div>
                                    <div className={styles.boxRight}>
                                        <h1>61 triệu</h1>
                                        <p>Số lượng người dùng Facebook tại Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <div className={styles.boxThongKe}>
                                    <div className={styles.boxLelf}>
                                        <FaRegClock />
                                    </div>
                                    <div className={styles.boxRight}>
                                        <h1>2:22'</h1>
                                        <p>Thời gian truy cập trung bình mỗi ngày</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 3 */}

                <section>
                    <div className="container">
                        <h1 className={styles.titleGiapPhap}>Giải pháp facebook hiệu quả</h1>
                        {/* <div className="row "> */}
                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6 order-1">
                                <div className={styles.content}>
                                    <h4>Content thu hút – chìa khóa cho sự thành công</h4>
                                    <p><strong>Nội dung hấp dẫn - Chìa khóa cho sự thành công:</strong> Tạo nội dung thu hút và chất lượng để thu hút sự quan tâm và tương tác từ đối tượng mục tiêu, là yếu tố rất quan trọng định hình sự thành công của chiến dịch.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-2 order-sm-2">
                                <div className={styles.boxImage}>
                                    <img src={ImageContent} alt="" />
                                </div>
                            </div>
                        </div>



                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6 order-2 order-sm-1">
                                <div className={styles.boxImage}>
                                    <img src={ImageDoanhThu} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-1">
                                <div className={styles.content}>
                                    <h4>Xác định mục tiêu chính xác - Đạt doanh thu dễ dàng</h4>
                                    <p>Đặt mục tiêu cụ thể cho chiến dịch và đảm bảo rằng bạn đang tiếp cận đúng đối tượng mục tiêu. Điều này giúp tăng khả năng chuyển đổi thành doanh thu.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6">
                                <div className={styles.content}>
                                    <h4>Kiểm soát ngân sách - Lo lắng về chi phí không còn</h4>
                                    <p>Quản lý ngân sách quảng cáo một cách chặt chẽ, thiết lập giới hạn ngân sách hàng ngày hoặc tổng cộng để không vượt quá nguồn tài chính của bạn.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.boxImage}>
                                    <img src={ImageNganSach} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center mb-4">
                            <div className="col-lg-6 order-2 order-sm-1">
                                <div className={styles.boxImage}>
                                    <img src={ImagePhatHanh} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-sm-2">
                                <div className={styles.content}>
                                    <h4>Phát hành nhanh - Tăng tương tác</h4>
                                    <p>Sử dụng công cụ quảng cáo trên Facebook để phát hành chiến dịch nhanh chóng và theo dõi kết quả thời gian thực để tối ưu hóa hiệu suất và tương tác.</p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </section>

                {/* section 4 */}

                <section>
                    <div className="container">
                        <h1 className={styles.titleQuiTrinh}>Qui trình chạy quảng cáo facebook</h1>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className={styles.ImageQuiTrinh}>
                                    <img src={ImageCfb} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className={styles.boxProcess}>
                                            <div className={styles.boxIcon}>
                                                <FaCircleCheck />
                                            </div>
                                            <div className={styles.boxProcessContent}>
                                                <span>01. Tư vấn và báo gián</span>
                                                <p>Khách hàng cần cung cấp thông tin sản phẩm, dịch vụ, mục tiêu và khu vực cần quảng cáo. Quảng Cáo Siêu Tốc tư vấn loại hình và báo giá quảng cáo phù hợp.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={styles.boxProcess}>
                                            <div className={styles.boxIcon}>
                                                <FaCircleCheck />
                                            </div>
                                            <div className={styles.boxProcessContent}>
                                                <span>02. Fanpage & Viết Bài Ads</span>
                                                <p> Hỗ trợ tạo Fanpage, viết bài và chỉnh sửa hình ảnh thu hút. Đăng bài viết chạy quảng cáo lên Fanpage sau khi khách hàng duyệt bài viết.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className={styles.boxProcess}>
                                            <div className={styles.boxIcon}>
                                                <FaCircleCheck />
                                            </div>
                                            <div className={styles.boxProcessContent}>
                                                <span>03. Setup Quảng Cáo FB</span>
                                                <p>Tư vấn khách hàng lựa chọn target đối tượng phù hợp và tiến hành setup chiến dịch chạy quảng cáo trên Facebook như đã thống nhất.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <div className={styles.boxProcess}>
                                            <div className={styles.boxIcon}>
                                                <FaCircleCheck />
                                            </div>
                                            <div className={styles.boxProcessContent}>
                                                <span>04. Đo Lường & Báo Cáo</span>
                                                <p> Hai bên dõi hiệu quả quảng cáo và đưa ra chiến lược phù hợp. Khách hàng đánh giá qua đơn hàng, chúng tôi đánh giá qua số liệu FB, báo cáo định kỳ gởi khách hàng</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* section cuoi */}

            <section className={styles.section5}>
                <div className="container">
                    <div className={styles.boxTuVan}>
                        <div className="row">
                            <div className={styles.boxCenter}>
                                <div className={clsx("col-lg-6", styles.right)}>
                                    <span>Hãy để đội ngũ chuyên gia tư vấn cho bạn.</span>
                                </div>
                                <div className={clsx("col-lg-6", styles.left)}>
                                    <button className={styles.pulseButton} onClick={() => setModalShow(true)}>Đăng ký tư vấn</button>
                                </div>
                            </div>

                        </div>

                        {/* <button>Đăng ký tư vấn</button> */}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Ads