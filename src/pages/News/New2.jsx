import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import ImageNews from "../../assets/imageNews.jpg"
import styles from "../News/News.module.css"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import anh1 from "../../assets/news2/anh1.png"
import anh2 from "../../assets/news2/anh2.png"
import anh3 from "../../assets/news2/anh3.png"

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

const New2 = () => {
    return (
        <>

            <Header />

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <main className={styles.mains}>
                            <h1 className={styles.titleNewsPost}>Cách nuôi Acc Facebook Ads để chạy quảng cáo</h1>
                            <p className={styles.des}>
                                Cách tạo tài khoản cá nhân, tài khoản quảng cáo dễ được trả sau + khả năng sống cao. <br />Dù không biết là bao giờ fix hoàn toàn nhưng nếu ít 1-2 cái thì chắc vẫn còn cửa, hi vọng mọi người tranh thủ làm thêm vài cái mà dự phòng.
                            </p>
                            <p>Thao tác chủ yếu trên điện thoại và đường mạng, thiết bị đăng nhập, thẻ visa khác hoàn toàn không nên chung với hệ thống cũ.

                                <ul>
                                    <li>
                                        Mỗi bước cần chắc chắn thời gian thì nên để thời gian nuôi 1-2 ngày.
                                    </li>
                                    <li>
                                        Nếu bị khoá sau khi tạo thì phải ngưng cách ngày ra mới thực hiện tiếp.
                                    </li>
                                    <li>
                                        Nội dung – trang – hình ảnh sử dụng cho quảng cáo phải mới hoàn toàn chưa từng được đăng tải ở đâu.
                                    </li>
                                </ul>
                            </p>

                            <h4>1. Lập tài khoản cá nhân</h4>

                            <p>
                                Đăng kí bằng điện thoại, cái này đơn giản rồi. Nhớ tải một app khác Facebook, có thể là trình duyệt Opera, Cốc Cốc … đăng kí từ đó. Cẩn thận có thể dùng một chiếc điện thoại mới.
                            </p>
                            <p>
                                Nhớ có sim điện thoại xác thực đi kèm. Vào trong cài đặt thêm Email đăng nhập, lưu ý sử dụng email mới chưa từng đăng kí sử dụng với Facebook.
                            </p>
                            <p>Đăng kí xong điền thông tin của mình nhưng khác thông tin mà mình đã khai báo trên tài khoản Facebook khác trước đây:</p>
                            <p>Ví dụ bạn sống ở HN, vẫn ghi là HN nhưng không ghi tới từ Quảng Ninh mà chuyển sang Hải Phòng. Sau đó các trường cấp 3, trường cấp 2 cũng liên quan như thế. Tuyệt đối không chọn trường cấp 3 có ở Đà Nẵng hay Hồ Chí Minh.</p>
                            <p>Đăng các ảnh tự chụp bằng di động lên tài khoản cá nhân. Kết bạn với ai đó không phải là bạn.</p>
                            <p>Tài khoản này có thể để tên bạn nhưng sử dụng giấy tờ xác thực khác với giấy tờ bạn từng dùng ở các tài khoản khác. Tên có thể đảo, bỏ dấu ví dụ: Tài khoản gốc là Trần Công Thành  tài khoản mới có thể là Tran Thanh Cong, Cong Thanh Tran, Công Thành Trấn …</p>
                            <p>* Tuyệt đối quan trọng: không đăng lại nội dung nhất là hình ảnh đã được đăng tải ở trên tài khoản cũ, để nội dung các tài khoản giống nhau y hệt.</p>
                            <h4>2. Thêm thẻ</h4>

                            <p>
                                Nếu sử dụng app Facebook bạn có thể thêm thẻ trực tiếp tại phần Cài đặt, Thanh toán trong app.
                            </p>

                            <img src={anh1} alt="" style={{ width: '100%' }} />
                            <p>
                                Nếu sử dụng các trình duyệt thì cần làm một bước trung gian đó là đăng nhập tài khoản trên ở máy tính, nhớ tạo profile Chrome, cốc cốc mới hoặc trình duyệt web khác để tránh trùng lịch sử đăng nhập.
                            </p>
                            <img src={anh2} alt="" style={{ width: '100%' }} />
                            <p>Chờ tiếp qua ngày để tài khoản ốn định.</p>
                            <h4>3. Tạo cam</h4>
                            <p>
                                Bắt đầu từ bước này lưu ý quan trọng là thực hiện tất cả bằng điện thoại.
                            </p>
                            <p>
                                Tìm 1 trang để tạo quàng cáo, trang này phải uy tín chưa từng có lịch sử bị khoá tài khoản hoặc từ chối quảng cáo. Chia sẻ quyền biên tập viên với tài khoản Facebook mới.
                            </p>
                            <p>
                                Sau đó thì đăng một bài viết mới từ chính tài khoản Facebook. Nội dung dạng text không cần phải chau chuốt. Có thể viết dạng đơn giản kiểu:
                                <ul>
                                    <li>
                                        Ngày mai Hà Nội thời tiết rất đẹp.
                                    </li>
                                    <li>
                                        Tôi yêu Hà Nội.
                                    </li>
                                </ul>
                            </p>
                            <p>Tuyệt đổi không trực tiếp quảng cáo sản phẩm/ dịch vụ của mình trong chiến dịch đầu tiên nhất là các sản phẩm sức khoẻ làm đẹp. Nội dung của quảng cáo đàu tiên hãy nghĩ thật đơn giản, tích cực, không cần dài dòng làm gì.</p>
                            <p>Dùng điện thoại Boot Post bài viết trên:

                                <ul>
                                    <li>
                                        Ngân sách ngẫu nhiên 23,35, 45, 101 k … với thời gian 1-3 ngày
                                    </li>
                                    <li>
                                        Đối tượng chỉnh lại độ tuổi nhỏ hơn ngẫu nhiên thay mặc định 18-65 thành 18-35. 20-44….
                                    </li>
                                </ul>
                            </p>
                            <p>Nếu có yêu cầu thêm thẻ thì thêm thẻ một lần nữa.</p>
                            <img src={anh3} alt="" style={{ width: '100%' }} />
                            <p>Để cho ads đó tiêu hết ngưỡng thanh toán đầu tiên (43:69k … ) thì ta tiếp tục tạo chiến dịch thứ 2 ờ trên các trang bán sản phẩm. Nếu bạn muốn chắc ăn có thể để tài khoản qua ngưỡng 220k, có thể tiêu 1 triệu mới phải thanh toán hẵng tạo quàng cáo bán sản phẩm dịch vụ.</p>

                        </main>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <span className={styles.titlePostHighlight}>Bài viết nổi bật</span>
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
export default New2