import Header from "../../header/Header"
import Footer from "../../footer/Footer"

import ImageNews from "../../assets/imageNews.jpg"
import service1 from "../../assets/servicewebsite.jpg"
import service2 from "../../assets/servicelanding.jpg"
import service3 from "../../assets/servicefbads.jpg"
import service4 from "../../assets/servicefbunlock.jpg"
import bgNews1 from "../../assets/news1/bgnew1.jpg"
import bgNews2 from "../../assets/news2/bgnew2.png"
import bgNews3 from "../../assets/news3/bganh3.png"
import bgNews4 from "../../assets/news4/bganh4.png"
import bgNews5 from "../../assets/news5/bganh5.jpg"
import bgNews6 from "../../assets/news6/bganh6.jpg"
import NewsItem from "../Components/NewsComponent/NewsItem"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import styles from "../News/News.module.css"


const News = () => {

    const listNews = [
        {
            id: 1,
            image: bgNews1,
            title: "Top 3 Tool Copy chiến dịch quảng cáo Facebook của đối thủ tốt nhất",
            description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
            link: '/top-3-tool-copy-chien-dich-quang-cao-facebook-cua-doi-thu-tot-nhat'
        },
        {
            id: 2,
            image: bgNews2,
            title: "Cách nuôi Acc Facebook Ads để chạy quảng cáo",
            description: "Cách tạo tài khoản cá nhân, tài khoản quảng cáo dễ được trả sau + khả năng sống cao. là bao giờ fix hoàn toàn nhưng nếu ít 1-2 cái thì chắc vẫn còn cửa, hi vọng mọi người tranh thủ làm thêm vài cái mà dự phòng.",
            link: '/cach-nuoi-acc-facebook-ads-de-chay-quang-cao'
        },
        {
            id: 3,
            image: bgNews3,
            title: "Tìm hiểu Dark Web từ cơ bản đến nâng cao",
            description: "Việc truy cập Dark Web cực kỳ dễ dàng và cũng cực kỳ dễ bị phát hiện nếu bạn không có thực hiện các biện pháp phòng bị. Nếu bạn chưa quen với Darknet, bài viết này sẽ giúp bạn đứng vững trên con đường của mình.",
            link: '/tim-hieu-dark-web-tu-co-ban-den-nang-cao'
        },
        {
            id: 4,
            image: bgNews4,
            title: "Content là gì? Cách nhận biết & khác phục vấn đề nội dung mỏng trên website",
            description: "Khám phá Content là gì? TÌm hiểu định nghĩa, vai trò và cách ứng dụng content hiệu quả trong chiến lượt content  marketing. Tìm hiểu ngay",
            link: '/top-5-shop-ban-do-gia-dung-cho-mua-he-tren-shopee-gia-re-uy-tin-chat-luong'
        },
        {
            id: 5,
            image: bgNews5,
            title: "Các cách tấn công của Hacker dùng để chiếm quyền tài khoản của bạn",
            description: "Đây là tổng hợp một số phương thức chiếm quyền tài khoản mà Hacker thường sử dụng để tấn công bạn. Cùng tìm hiểu để biết cách nhận diện và có cách phòng chống tránh bị mất dữ liệu nhé. Bài viết của bạn Trương Hiếu đăng trên J2Team.",
            link: '/mot-so-cach-hacker-tan-cong-de-chiem-quyen-tai-khoan'
        },

        {
            id: 6,
            image: bgNews6,
            title: "Hướng dẫn tự lập trình bằng Blackbox AI",
            description: "Khám phá Blackbox AI – Trợ thủ đắc lực cho lập trình viên với tính năng Code Chat, tích hợp Github và chuyển hình ảnh thành code dễ dàng! Thanh Kim by Thanh Kimin Phần mềm máy tính Blackbox AI đang trở thành một cái tên nổi bật trong cộng đồng lập trình viên nhờ khả năng hỗ trợ vượt trội trong việc tối ưu hóa quy trình viết mã. Đây không chỉ là một công cụ thông thường, mà còn là một trợ lý ảo thông minh, sẵn sàng đồng hành cùng bạn trong mọi dự án coding. Hãy cùng khám phá xem điều gì khiến công cụ này thu hút đến vậy!",
            link: '/huong-dan-tu-lap-trinh-bang-blackbox-ai'
        },
    ]

    const listNewsPost = [
        {
            'id': 1,
            'image': service3,
            'title': 'Quảng cáo Facebook như thế nào là hiệu quả',
            'views': '/quang-cao-facebook',
            'links': '/tin-tuc-new1'
        },
        {
            'id': 2,
            'image': service4,
            'title': 'Hỗ trợ Facebook',
            'views': '/ho-tro-facebook',
            'links': '/tin-tuc-new2'
        },
        {
            'id': 3,
            'image': service2,
            'title': 'Thiết kế landing page',
            'views': '/landing-page',
            'links': '/tin-tuc-new2'
        },
        {
            'id': 4,
            'image': service1,
            'title': 'Thiết kế website',
            'views': '/website',
            'links': '/tin-tuc-new2'
        },
    ]

    return (
        <>

            <Header />
            <div className="container">
                <h1 className={styles.title}>TIN TỨC</h1>
                <div className="row">
                    <div className="col-lg-8">
                        {listNews.map(item => (
                            <NewsItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="col-lg-4">
                        <span className={styles.titlePostHighlight}>Dịch vụ</span>
                        <div className={styles.line}></div>
                        {
                            listNewsPost.map(item => (
                                <NewsPostItem key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default News 