import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import ImageNews from "../../assets/imageNews.jpg"
import styles from "../News/News.module.css"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import bgNews1 from "../../assets/news1/bgnew1.jpg"
import anh1 from "../../assets/news5/anh1.jpg"
import anh2 from "../../assets/news5/anh2.jpg"
import anh3 from "../../assets/news5/anh3.jpg"

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


const New5 = () => {
    return (
        <>

            <Header />

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <main className={styles.mains}>
                            <h1 className={styles.titleNewsPost}>Các cách tấn công của Hacker dùng để chiếm quyền tài khoản của bạn</h1>
                            <p className={styles.des}>
                                Đây là tổng hợp một số phương thức chiếm quyền tài khoản mà Hacker thường sử dụng để tấn công bạn. Cùng tìm hiểu để biết cách nhận diện và có cách phòng chống tránh bị mất dữ liệu nhé. Bài viết của bạn Trương Hiếu đăng trên J2Team.
                            </p>
                            <h4>Phishing – giả mạo trang đăng nhập</h4>
                            <img src={anh1} alt="" style={{ width: '100%' }} />
                            <p>Phishing là kiểu giả mạo trang đăng nhập. Mấy bạn cứ đi dạo một vòng các group hoặc fanpage là thấy các bình luận share link xxx hoặc video gì hot. Bấm vào bắt đăng nhập Facebook mới cho xem thì 100% đó là website giả mạo để chiếm đoạt tài khoản của bạn. Đây là cách mà các tricker ở VN dùng khá phổ biến để lùa gà. Để tránh Phishing bạn có thể dùng tiện ích Chống Lừa Đảo của HieuPC.</p>



                            <img src={anh2} alt="" style={{ width: '100%' }} />


                            <p>Sniffing hay còn gọi là bắt trộm gói tin. Bằng một cách nào đó Hacker truy cập vào mạng wifi, internet của bạn. Sau đó dùng các phần mềm bắt gói tin như Wireshark, Ettercap… xem gói tin truyền đi từ PC, mobile của bạn và lấy về cookie site mà bạn đã đăng nhập, hoặc lúc bạn nhập mật khẩu nó lấy luôn gói tin mà bạn khai báo username, password (trường hợp website không sử dụng SSL – không có https).</p>

                            <h4>Injection – đính kèm mã độc</h4>


                            <img src={anh3} alt="" style={{ width: '100%' }} />
                            <p>Đây là cách họ quảng cáo các ứng dụng, extension trên chrome, hoặc các đoạn mã js code get like fanpage, đổi giao diện Facebook, lấy token, cookie chẵn hạn…. Sau khi bạn cài vào máy các Extension độc hại sẽ lấy được Cookie và gửi về cho hacker hoặc thậm chí là cả thông tin tài khoản đăng nhập.</p>
                            <p>Vì vậy đừng cài những extension nếu bạn không rõ nguồn gốc và bị đánh giá sao thấp.</p>


                            <h4>Trojan, malware, keyloger – mã độc</h4>


                            <p>Mình gọi chung là Virus cho nhanh nhé. Cách này nôm na là đính kèm virus vào các tool, công cụ, phần mềm, file tài liệu: Mở lên là bị nhiễm virus ngay. Virus này có thể có nhiều nhiệm vụ khác nhau tùy vào ý đồ của người làm ra. Có thể là mã hóa hết tài liệu của bạn và tống tiền (vd: wannacry virus), tạo botnet để ddos 1 website nào đó, hoặc đơn giản chỉ là ghi lại thao tác bàn phím, chụp ảnh màn hình, gửi log của user-pass khi bạn đăng nhập site nào đó.</p>
                            <p>Cách này tuy mới mà cũ. Cũ ở đây là hiện tại công nghệ 4.0 rồi nên các software anti virus xài rất tốt, có thể quét tới hơn 90% các loại virus, trojan. Mới ở đây là vẫn có những hacker có trình độ cao, tạo ra những con virus mà các phần mềm quét virus vẫn chưa phát hiện được. Theo đánh giá của mình thì cách này nếu sử dụng thì nó can thiệp sâu tới hệ thống máy tính của bạn, vì vậy hacker có thể làm rất nhiều việc, cách này là nguy hiểm nhất. Bởi vậy hãy luôn cẩn trọng khi mở 1 chương trình nào đó hoặc 1 file không rõ nguồn gốc nhé</p>

                            <h4>Brute Force Attack, Dictionary Attack – dò Password</h4>
                            <p>
                                Ngoài các cách trên thì cũng có 1 số thủ thuật để chiếm account của bạn. Ví dụ như Brute Force hay còn gọi là mò pass, dùng các phần mềm đoán mật khẩu. Họ sẽ có 1 kho database các mật khẩu thông dụng và sau đó chạy tới khi nào đúng thì thôi. Cách này mấy site lớn ví dụ như Facebook, Google, các trang website ngân hàng…etc giờ không còn dùng đc vì nhập quá số lần cho phép ăn ngay quả capcha để check xem phải người dùng thật ko, hoặc cấm login trong một khoản thời gian cụ thể, hoặc khóa luôn tài khoản của bạn để bảo vệ bạn.
                            </p>
                            <h4>Hack Database – Tấn công Server</h4>
                            <p>
                                Cách này thì không cần bàn nữa rồi, đây là cách Hacker xem hết được thông tin Database mà bạn đang sử dụng để lưu dữ liệu, cách này thường là tấn công ko có mục tiêu cá nhân, tổ chức cụ thể nhé. Đơn giản là website hoặc ứng dụng nào bị lỗi có thể bị Hacker tấn công Local (hack luôn cả hosting hoặc server) hoặc SQL Injection để khai thác hết dữ liệu database. Thường thì mật khẩu lưu trên Database là dạng MD5hoặc mã hóa theo 1 chuẩn nào đó, hack được database xong còn giải mã được mật khẩu hay không là chuyện khác.
                            </p>

                            <h4>Một số vấn đề về chiếm quyền tài khoản Facebook</h4>

                            <p><strong>Account các bạn bị hack để làm gì:</strong> Các account này lấy về hacker sẽ thay đổi email, đổi số điện thoại và bán lại cho người cần sử dụng. Ví dụ như dùng để chạy quảng cáo, seeding (tạo tương tác giả), dùng để sử dụng (clone/via). Spam group, hoặc làm môi nhữ để hack tiếp các facebook khác bằng phishing.</p>
                            <p>
                                <strong>Bị lấy cookie có nguy hiểm không:</strong> Khi họ chiếm được cookie của bạn, Hacker sẽ thao tác gần như 90% những gì bạn làm được. Tuy nhiên ở một số thao tác như thêm email, đá số hoặc cập nhật mật khẩu, bật 2fa, các thao tác để thay đổi thông tin tài khoản thì họ vẫn cần phải có mật khẩu. Hện nay 1 số thanh niên bao gồm cả mình còn có cách chỉ cần cookie, thêm mail vào Facebook và đặt email mới đó là email chính mà không cần mật khẩu, sau đó dùng chức năng lấy lại mật khẩu gửi vào email mới đó. Kết quả là bạn sẽ mất toi tài khoản.
                            </p>
                            <p><strong>Token Facebook là gì:</strong> Token là một đoạn mã do Facebook tạo ra nhằm xác minh với người dùng với API của Facebook. Khi bạn request 1 thông tin gì đó cần có mã này. Mã token Facebook của bạn nếu bị đánh cắp có thể sẽ làm được 1 số việc: seeding, spam, share link, crawl data, quản lý ads account…. Một số chức năng khác như từ token có thể xem được tin nhắn của bạn tuy nhiên theo mình nhớ thì Facebook nó đã khóa API đó rồi.</p>


                            <p><strong>Làm cách nào để bảo mật tài khoản của bạn:</strong> Thêm email phụ, số điện thoại phụ. Bật 2fa (xác minh 2 bước bằng sms hoặc Google Authenticator..), tránh mở file, tránh cài các ứng dụng, extension không rõ nguồn gốc. Không đăng nhập trên các site không đúng với domain chính thức…</p>

                            <p>Trên đây là những cách mình biết, kiến thức hạn hẹp mong bạn nào biết rồi thì đọc chơi cho vui. Bạn nào chưa biết thì phòng tránh nhé.</p>

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
export default New5