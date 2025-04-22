import Service from "../../assets/service.jpg"
import Banner1 from "../../assets/banner.png"
import BannerHome1 from "../../assets/bannerhome1.jpg"
import cust1 from "../../assets/customer/1.png"
import cust2 from "../../assets/customer/2.png"
import cust3 from "../../assets/customer/3.png"
import cust4 from "../../assets/customer/4.png"
import cust5 from "../../assets/customer/5.png"
import cust6 from "../../assets/customer/6.png"
import News from "../../assets/news.png"
import { FaUserPlus, FaUsers, FaBuffer, FaLaptop, FaStar } from "react-icons/fa";

import { Link } from "react-router-dom"
import styles from "../Home/Home.module.css"
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import banner from "../../assets/bannerads.jpg"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const newsList = [
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new1'
    },
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new1'
    },
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new2'
    },
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new2'
    },
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new2'
    },
    {
        image: News,
        title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
        description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
        link: '/tin-tuc-new2'
    },

];


const Home = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,  // chỉ chạy 1 lần
        threshold: 0.5       // phần tử hiển thị 50% sẽ kích hoạt
    });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576, // dưới 576px (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    var news = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 576, // dưới 576px (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div>
            <Header />
            {/* banner */}
            <img src={banner} style={{ width: '100%' }} alt="" />

            {/* section 1 */}

            <div className={styles.bg}>
                <section className={styles.section1}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 mt-4">
                                <img src={BannerHome1} style={{ width: '100%' }} alt="" />
                            </div>
                            <div className="col-12 col-lg-6 mt-4" >
                                <div className={styles.contentSection1} >
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
                            <div className="col-lg-3 mt-4">
                                <Link to='/website'>
                                    <div className={styles.boxService}>
                                        <div className={styles.hoverImage}>
                                            <img src={Service} style={{ width: '100%' }} alt="" />
                                            <div className={styles.backgroundText}>
                                                <p>THIẾT KẾ WEBSITE</p>
                                            </div>
                                        </div>
                                        <span>THIẾT KẾ WEBSITE</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 mt-4" >
                                <Link to='/quang-cao-facebook'>
                                    <div className={styles.boxService}>
                                        <div className={styles.hoverImage}>
                                            <img src={Service} style={{ width: '100%' }} alt="" />
                                            <div className={styles.backgroundText}>
                                                <p>THIẾT KẾ LANDING PAGE</p>
                                            </div>
                                        </div>
                                        <span>THIẾT KẾ LANDING PAGE</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 mt-4">
                                <Link to='/landing-page'>
                                    <div className={styles.boxService}>
                                        <div className={styles.hoverImage}>
                                            <img src={Service} style={{ width: '100%' }} alt="" />
                                            <div className={styles.backgroundText}>
                                                <p>CHẠY QUẢNG CÁO FACEBOOK</p>
                                            </div>
                                        </div>
                                        <span>QUẢNG CÁO FACEBOOK</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-3 mt-4">
                                <Link>
                                    <div className={styles.boxService}>
                                        <div className={styles.hoverImage}>
                                            <img src={Service} style={{ width: '100%' }} alt="" />
                                            <div className={styles.backgroundText}>
                                                <p>HỖ TRỢ FACEBOOK</p>
                                            </div>
                                        </div>
                                        <span>HỖ TRỢ FACEBOOK</span>
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
                            <div className="col-lg-3  col-6">
                                <div className={styles.showExperience} ref={ref}>
                                    <FaUserPlus />
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={500}
                                            duration={3}
                                            suffix="+"
                                            className={styles.countUpText}
                                        />
                                    )}
                                    <p>KHÁCH HÀNG</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={styles.showExperience}>
                                    <FaLaptop />
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={300}
                                            duration={3}
                                            suffix="+"
                                            className={styles.countUpText}
                                        />
                                    )}
                                    <p>ĐƯỢC TỐI ƯU</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={styles.showExperience}>
                                    <FaBuffer />
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={100}
                                            duration={3}
                                            suffix="%"
                                            className={styles.countUpText}
                                        />
                                    )}
                                    <p>HÀI LÒNG</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={styles.showExperience}>

                                    <FaUsers />
                                    {inView && (
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={3}
                                            suffix="+"
                                            className={styles.countUpText}
                                        />
                                    )}
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
                        <Slider className={styles.editSlider} {...settings}>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust1} alt="" />
                                        <div className={styles.boxStar}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <div className={styles.boxCenter}>
                                        <h2>"Thiết kế website"</h2>
                                        <p>Tôi thực sự hài lòng với cách họ thiết kế website cho tôi – không chỉ đẹp mắt mà còn rất dễ sử dụng. Đội ngũ luôn lắng nghe ý tưởng của tôi và biến nó thành một sản phẩm hoàn chỉnh.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Hồ Tuấn Anh</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust2} alt="" />
                                        <div className={styles.boxStar}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <div className={styles.boxCenter}>
                                        <h2>"Thiết kế landing page"</h2>
                                        <p>Landing page được thiết kế rất ấn tượng và thu hút người xem ngay từ cái nhìn đầu tiên. Họ không chỉ quan tâm đến thẩm mỹ mà còn tối ưu hiệu quả chuyển đổi cho tôi.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Đỗ Quang Chiến</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust3} alt="" />
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
                                        <p>Chiến dịch quảng cáo Facebook của tôi được triển khai rất bài bản. Họ luôn phân tích dữ liệu và tối ưu liên tục để mang lại hiệu quả cao nhất với ngân sách phù hợp.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Nguyễn Văn Thành</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust4} alt="" />
                                        <div className={styles.boxStar}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <div className={styles.boxCenter}>
                                        <h2>"Hỗ trợ Facebook"</h2>
                                        <p>Khi fanpage gặp sự cố, họ hỗ trợ tôi rất nhanh chóng và tận tình. Nhờ sự am hiểu và kinh nghiệm của họ, mọi vấn đề được giải quyết ổn thỏa trong thời gian ngắn.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Trịnh Ngọc Cường</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust5} alt="" />
                                        <div className={styles.boxStar}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <div className={styles.boxCenter}>
                                        <h2>"Thiết kế Website"</h2>
                                        <p>Website của tôi sau khi hoàn thiện không chỉ đẹp mà còn hoạt động mượt mà trên mọi thiết bị. Tôi rất ấn tượng với khả năng nắm bắt ý tưởng và chuyển hóa nó thành giao diện thực tế của họ.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Trần Ngọc Thảo Vy</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.editSlider}>
                                <div className={styles.boxFeedback}>
                                    <div className={styles.boxTop}>
                                        <img src={cust6} alt="" />
                                        <div className={styles.boxStar}>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <div className={styles.boxCenter}>
                                        <h2>" Thiết kế Landing Page"</h2>
                                        <p>Landing page mà họ thiết kế giúp tôi tăng tỷ lệ chuyển đổi đáng kể. Thiết kế rõ ràng, thu hút, CTA nổi bật và quan trọng là giữ đúng phong cách thương hiệu của tôi.</p>
                                    </div>
                                    <div className={styles.boxBottom}>
                                        <div className={styles.content}>
                                            <h6>Nguyễn Tuấn Anh</h6>
                                            <p>Khách hàng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>


                {/* section 5 */}

                <section className={styles.section5}>
                    <div className="container">
                        <h1>TIN TỨC</h1>

                        <div className="row">
                            <Slider className={styles.editSlider} {...news}>
                                {newsList.map((news, index) => (
                                    <div className={clsx("col-lg-4 mt-2", styles.editSlider)} key={index}>
                                        <div className={styles.boxnews}>
                                            <img src={news.image} alt="" />
                                            <div className={styles.contentNews}>
                                                <Link to={news.link}>{news.title}</Link>
                                                <p>{news.description}</p>
                                                <div className={styles.line}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Home