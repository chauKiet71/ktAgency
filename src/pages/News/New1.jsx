import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import ImageNews from "../../assets/imageNews.jpg"
import styles from "../News/News.module.css"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import bgNews1 from "../../assets/news1/bgnew1.jpg"
import anh1 from "../../assets/news1/anh1.jpg"
import anh2 from "../../assets/news1/anh2.jpg"
import anh3 from "../../assets/news1/anh3.jpg"

const listNewsPost = [
    {
        'id': 1,
        'image': ImageNews,
        'title': 'Quảng cáo Facebook như thế nào là hiệu quả',
        'views': '/quang-cao-facebook',
        'links': '/tin-tuc-new1'
    },
    {
        'id': 2,
        'image': ImageNews,
        'title': 'Hỗ trợ Facebook',
        'views': '/ho-tro-facebook',
        'links': '/tin-tuc-new2'
    },
    {
        'id': 3,
        'image': ImageNews,
        'title': 'Thiết kế landing page',
        'views': '/landing-page',
        'links': '/tin-tuc-new2'
    },
    {
        'id': 4,
        'image': ImageNews,
        'title': 'Thiết kế website',
        'views': '/website',
        'links': '/tin-tuc-new2'
    },
]


const New1 = () => {
    return (
        <>

            <Header />

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <main className={styles.mains}>
                            <h1 className={styles.titleNewsPost}>Top 3 Tool Copy chiến dịch quảng cáo Facebook của đối thủ tốt nhất</h1>
                            <p className={styles.des}>
                                Bất kỳ ai muốn kinh doanh Online đều ít nhất một lần chạy quảng cáo. Tuy nhiên có người chạy cùng một loại quảng cáo hơn lại không ra đơn được, trong khi đối thủ thì ngày nào cũng bán được hàng. Có thể là giá họ tốt hơn hoặc chiến dịch quảng cáo của họ xác định đúng đối tượng. Vậy làm sao để copy chiến dịch quảng cáo Facebook của đối thủ tốt nhất. Trong bài này mình sẽ giới thiệu đến các bạn 3 Tool giúp copy chiến dịch quảng cáo cực kỳ hiệu quả giúp tăng khả năng ra đơn đến 70%.
                            </p>
                            <h4>Tool spy ads của AhaChat giúp sao chép chiến dịch quảng cáo Facebook tốt nhất</h4>
                            <p>
                                Chắc hẵn dân bán hàng Online ai cũng biết đến spy ads của AhaChat có thể nói đây là Tool copy chiến dịch quảng cáo Facebook tốt nhất hiện nay, với tính năng sao chép toàn bộ chiến dịch quảng cáo của đối thủ kết hợp với chiến dịch bạn đang chạy, thì khả năng ra đơn sẽ cao hơn rất nhiều.
                            </p>

                            <p>
                                Theo thống kê từ dân Marketing thì có đến 90% người dùng chạy Ads đều sử dụng spy ads để phân tích đối thủ, các shop cạnh tranh để từ đó có hướng chạy Ads hiệu quả hơn.
                            </p>
                            <p>
                                Các tính năng nổi bật của spy ads mà các tool copy chiến dịch quảng cáo Facebook không có đó là:
                                <ul>
                                    <li>Tìm kiếm các bài viết đang chạy quảng cáo trên Facebook</li>
                                    <li>Thống kê số lượng tương tác và bình luận của các bài viết quảng cáo</li>
                                    <li>Xem được bài nào đang được chạy quảng cáo</li>
                                    <li>Tìm và tải tất cả bình luận của bài viết đang chạy quảng cáo (lọc theo từ khóa, sđt hoặc email), thường được sử dụng để lấy thông tin khách hàng của đối thủ</li>
                                </ul>
                            </p>
                            <img src={anh1} alt="" style={{ width: '100%' }} />

                            <h4>SocioGraph.io phân tích Ads đối thủ</h4>
                            <div className="text-center" style={{ width: '100%' }}>
                                <img src={anh2} alt="" style={{ width: '100%' }} />
                            </div>
                            <p>
                                SocioGraph.io là Website giúp bạn  phân tích những bài viết đang chạy quảng cáo trên Facebook với những nội dung sau:
                                <ul>
                                    <li>
                                        Tìm thời gian đăng bài quảng cáo hiệu quả nhất.
                                    </li>
                                    <li>Kiểm tra nội dung mà đối thủ đăng bài hàng ngày</li>
                                    <li>Cách đối thủ dùng Fanpage để chạy quảng cáo như thế nào</li>
                                    <li>
                                        Đếm số lượng tương tác bài viết của đối thủ và phân tích tâm lý khách hàng qua bình luận dưới bài quảng cáo.
                                    </li>
                                </ul>
                            </p>
                            <h4>Dùng tính năng “Thư viện Quảng cáo” của Facebook</h4>
                            <p>Thư viện quảng cáo trước đây được gọi là “Info and Ads” Tools, tuy nhiên tính năng này đã được đổi sang tên mới được hơn 1 năm nay. Facebook cho phép người dùng sử dụng công này nhằm tăng tính minh bạch cho các chủ sở hữu Fanapge.</p>
                            <div className="text-center" style={{ width: '100%' }}>
                                <img src={anh3} alt="" style={{ width: '100%' }} />
                            </div>

                            <p>
                                Mặc dù mục đích thật sự của “Thư viện Quảng cáo”  là để người dùng có thể kiểm tra xem một Fanpage đang chạy Quảng cáo nội dung gì, đang chạy từ các thương hiệu nào, nhưng chính tính năng này lại được tận dung để phân tích chiến dịch chạy quảng cáo của đối thủ.
                            </p>
                            <p>
                                Nếu bạn muốn biết đối thủ bán hàng của mình đang chạy Ads gì, chỉ với một cú click, bạn sẽ có thông tin về chiến dịch quảng cáo của đối thủ hiện đang hoạt động như thế nào.
                            </p>
                            <p>
                                <strong>Ưu điểm:</strong>
                                <ul>
                                    <li>
                                        Do công cụ này miễn phí nên đối thủ của bạn cũng có thể dùng cách giống bạn để copy chiến dịch quảng cáo Facebook.
                                    </li>
                                    <li>
                                        Không có tính năng phân tích lượt like, comment và lượt share của 1 bài viết cụ thể.
                                    </li>
                                    <li>Không lấy được bình luận ẩn</li>
                                </ul>
                            </p>
                            <p>Nếu bạn xác định bước vào con đường kinh doanh Online, bạn cần phải biết người biết ta, trăm trận trăm thắng. Do đó việc phân tích Ads để copy chiến dịch quảng cáo Facebook của đối thủ là việt nên làm. Hiện mình vẫn dùng spy ads của AhaChat vì nó tổng hợp được tất cả tính năng của các công cụ khác, giúp bạn tiết kiệm được rất nhiều thời gian và tăng hiệu quả ra đơn.</p>

                        </main>
                    </div>
                    <div className="col-lg-4 mt-4" style={{ position: 'sticky', top: '100px' }}>
                        <span className={styles.titlePostHighlight}>dịch vụ</span>
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
export default New1