import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import ImageNews from "../../assets/imageNews.jpg"
import styles from "../News/News.module.css"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"

const listNewsPost = [
    {
        'id': 1,
        'image': ImageNews,
        'title': 'Quảng cáo Facebook như thế nào là hiệu quả',
        'date': '05 Tháng 01, 2024',
        'links': '/tin-tuc-new1'
    },
    {
        'id': 2,
        'image': ImageNews,
        'title': 'Quảng cáo Facebook như thế nào là hiệu quả',
        'date': '05 Tháng 01, 2024',
        'links': '/tin-tuc-new1'
    },
]


const New2 = () => {
    return (
        <>

            <Header />

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <main>
                            <h3>Digital Marketing sẽ lên ngôi năm 2025?</h3>
                            <p>
                                Bản chất ngành Marketing đã đem lại nhiều trải nghiệm thú vị dành cho giới trẻ thì ngày nay
                                GenZ chiếm lĩnh thế giới bán hàng những nền tảng công nghệ Số. Các bạn trẻ GenZ là những
                                người bắt trends nhanh và thành thạo việc sử dụng các trang mạng xã hội. Đây là ưu điểm lớn
                                nhất để GenZ chinh phục và làm chủ ngành Digital Marketing này.
                            </p>
                            <p>
                                Trong thế giới Số hiện nay, người làm Digital Marketing đòi hỏi có sự sáng tạo, óc quan sát
                                và sự nhạy bén với những thay đổi. GenZ có trong mình những tố chất đó và khi ở trong môi
                                trường tốt, các bạn trẻ có thể phát huy được hết khả năng và đưa ra những ý tưởng mang tính
                                đột phá, táo bạo.
                            </p>
                            <p>
                                Năm 2022 là năm được dự báo sẽ là thời điểm bùng nổ của GenZ khi các bạn đã có đủ trải
                                nghiệm, sự giảo dục về Digital Marketing được đẩy mạnh và đặc biệt là nhu cầu nhân sự của
                                ngành đang ở mức cao.
                            </p>

                            <h2>II, Digital Marketing sẽ lên ngôi năm 2022?</h2>

                            <p>
                                Để trả lời cho câu hỏi này, hãy tìm hiểu về top những ngành đang có vị trí quan trọng trong
                                thị trường tuyển dụng:
                            </p>

                            <h3>1, Top những ngành có nhu cầu tuyển dụng cao</h3>

                            <p>
                                Một trong những cách để xác định xem ngành nghề đó có thực sự xã hội cần hay không thì chúng
                                ta sẽ nhìn vào nhu cầu tuyển dụng qua các năm. 06 ngành dưới đây, bao gồm Digital Marketing
                                đang được quan tâm nhất:
                            </p>

                            <h4>a, Các ngành liên quan đến y tế, sức khoẻ</h4>
                            <p>
                                Trải qua 2 năm biến động vì đại dịch Covid-19, thế giới đã thấu hiểu và đề cao hơn việc bảo
                                vệ sức khoẻ cá nhân. Các dịch vụ y tế, khám chữa bệnh được quan tâm đầu tư nhằm đem lại sự
                                an tâm về sức khoẻ cho con người. Do đó, việc làm và nhân sự ngành y tế được coi trọng và có
                                nhu cầu tuyển dụng cao hơn.
                            </p>
                            <p>
                                Ngành y tế sẽ trở thành sự lựa chọn ưu tiên của nhiều bạn trẻ khi tìm kiếm ngành học phù hợp
                                với bản thân trong năm 2022.
                            </p>

                            <h4>b, Ngành Digital Marketing</h4>
                            <p>
                                Theo báo cáo của các trang tin tuyển dụng, Digital Marketing là một ngành được yêu thích bởi
                                có môi trường năng động, cơ hội việc làm phong phú và thu nhập ổn định. Trung bình nhân sự
                                Digital Marketing mới ra trường sẽ có mức lương từ 6-8 triệu đối với người chưa có kinh
                                nghiệm.
                            </p>
                            <p>
                                Nếu đã có kinh nghiệm, có dự án sinh viên thực tế, mức lương các bạn mới ra trường có thể
                                lên tới 8 con số cũng với ưu đãi hưởng hoa hồng doanh thu của nhiều doanh nghiệp. Vì thế,
                                thu nhập của ngành Digital Marketing là không giới hạn. Sự năng động và thu nhập hấp dẫn là
                                những yếu tố chính thu hút các bạn trẻ.
                            </p>

                            <h4>c, Ngành Công nghệ thông tin</h4>
                            <p>
                                Với tốc độ phát triển của thế giới Số, Công nghệ thông tin là ngành không thể thiếu nếu mỗi
                                quốc gia muốn nắm công nghệ và làm chủ công nghệ. Hầu hết các lĩnh vực của đời sống xã hội
                                ngày nay đều áp dụng một phần nào đó của Công nghệ để gia tăng trải nghiệm và rút ngắn thời
                                gian. Công nghệ đem lại sự chính xác và tự động hoá.
                            </p>
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