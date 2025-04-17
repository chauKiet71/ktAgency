import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import styles from "../../pages/Abouts/Abouts.module.css"

import banner from "../../assets/bannerads.jpg"
import banner2 from "../../assets/bannerhome1.jpg"
import { FaRegLightbulb, FaMagnet, FaRegArrowAltCircleUp } from "react-icons/fa";

const Abouts = () => {
    return (
        <>
            <Header />
            {/* banner */}
            <img src={banner} style={{ width: '100%' }} alt="" />

            {/* section 1 */}
            <section className={styles.section1}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.boxContentSection1}>
                                <span>Về chúng tôi</span>
                                <h3>GIỚI THIỆU</h3>
                                <div className={styles.line}></div>
                                <p style={{margin: '10px 0px 5px 0px'}}>Fago Agency là công ty chuyên cung cấp dịch vụ Marketing Online tổng thể cho doanh nghiệp nhỏ và siêu nhỏ</p>
                                <p>Với dịch vụ chính cung cấp bao gồm:

                                    Thiết kế website chuẩn SEO
                                    SEO tổng thể cam kết từ khóa lên TOP
                                    Vận hành thương mại điện tử: Shopee, Tiki, Lazada
                                    Vận hành quảng cáo google: Google search Ads, Google shopping
                                    Xây dựng quảng cáo Facebook
                                    Xây dựng bộ nhận diện thương hiệu
                                    Với mục tiêu giúp cho 10.000+ doanh nghiệp nhỏ và siêu nhỏ số hóa và bán hàng thành công trên online. Fago Agency tự hào cung cấp giải pháp Marketing online uy tín và đồng hành trong chặng đường cùng với doanh nghiệp</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="boxImage">
                                <img src={banner2} style={{ width: '100%' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className={styles.section2}>
                <div className="container">
                    <div className={styles.boxText}>
                        <h1>Chúng tôi định hình & <span>kiến tạo cho tương lai digital marketing</span></h1>
                        <p>Bằng khát vọng tiên phong và tầm nhìn chiến lược, chúng tôi không chỉ đồng hành mà còn mở lối. khia phóng tiềm năng ẩn chứa trong mọi doanh nghiệp. Từ đó, giúp bạn bứt phá giới hạn, vươn tầm ảnh hưởng, chinh phục những thị thường mới và xây dựng nền tảng phát triển toàn diện, bền vững trên hành trình thống lĩnh kỷ nguyên số.</p>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className={styles.section3}>

                <div className="container">
                    <h1>Sứ mệnh mang đến <span>cho khách hàng</span></h1>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className={styles.boxSuMenh}>
                                <div className={styles.boxImage}>
                                    <FaRegLightbulb />
                                </div>
                                <div className={styles.contentSection3}>
                                    <h5>Tăng nhận thức thương hiệu</h5>
                                    <p>Hỗ trợ doanh nghiệp trong việc tiếp caạn những khách hàng tiềm năng, xây dựng một thương hiệu đáng tin cậy và tạo ra những ấn tượng sâu sắc trong tâm trí của khách hàng</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.boxSuMenh}>
                                <div className={styles.boxImage}>
                                    <FaMagnet />
                                </div>
                                <div className={styles.contentSection3}>
                                    <h5>Thu hút khách hàng tiềm năng</h5>
                                    <p>Sử dụng các kênh marketing trực tuyến một cách hiệu quả để thu hút khách hàng tiềm năng, biến họ trở thành những khách hàng trung thành và thúc đẩy sự gia tăng doanh thu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.boxSuMenh}>
                                <div className={styles.boxImage}>
                                    <FaRegArrowAltCircleUp />
                                </div>
                                <div className={styles.contentSection3}>
                                    <h5>Tăng tỉ lệ chuyển đổi</h5>
                                    <p>Áp dụng chiến lược marketing hiệu quả sẽ giúp thúc đẩy hành động mua sắm, tăng cường tỷ lệ chuyển đổi và tối ưu hoá lợi nhuận cho doanh nghiệp.</p>
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
export default Abouts