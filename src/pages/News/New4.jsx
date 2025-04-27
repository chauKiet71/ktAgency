import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import ImageNews from "../../assets/imageNews.jpg"
import styles from "../News/News.module.css"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import bgNews1 from "../../assets/news1/bgnew1.jpg"
import anh1 from "../../assets/news4/anh1.png"
import anh2 from "../../assets/news4/anh2.png"
import anh3 from "../../assets/news4/anh3.png"
import anh4 from "../../assets/news4/anh4.png"
import anh5 from "../../assets/news4/anh5.png"

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


const New4 = () => {
    return (
        <>

            <Header />

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <main className={styles.mains}>
                            <h1 className={styles.titleNewsPost}>Top 5 Shop Bán Đồ Gia Dụng Cho Mùa Hè Trên Shopee: Giá Rẻ, Uy Tín, Chất Lượng</h1>
                            <p className={styles.des}>
                                Nếu bạn đang tìm kiếm những món đồ gia dụng tiện ích, mát mẻ để làm dịu đi cái nóng mùa hè, Shopee chính là nền tảng lý tưởng với nhiều cửa hàng uy tín và sản phẩm đa dạng. Bài viết này sẽ tổng hợp Top 5 shop bán đồ gia dụng cho mùa hè trên Shopee giá rẻ, uy tín, chất lượng dựa trên hàng ngàn phản hồi tích cực từ khách hàng.  Đặc biệt, mua ở đây bạn còn tận dụng được rất nhiều mã giảm giá Shopee hôm nay để săn đồ với giá cực rẻ nữa đó!  Đi cùng mình nào!
                            </p>
                            <h4>1. ĐỒ DÙNG TIỆN ÍCH SG</h4>
                            <p className={styles.tienich}><strong>Thông tin công khai :</strong>
                                <ul>
                                    <li><strong>Đánh giá:</strong> 4.7/5 sao (128,9k đánh giá).</li>
                                    <li><strong>Số người theo dõi:</strong> 97,8k người</li>
                                    <li><strong>Tỷ lệ phản hồi:</strong> 95% (thường trả lời tin nhắn trong vài giờ).</li>
                                    <li><strong>Thời gian hoạt động:</strong> 2 năm trên Shopee.</li>
                                    <li><strong>Số lượng sản phẩm:</strong> 475 sản phẩm, bao gồm đồ dùng nhà bếp, đồ điện, thiết bị làm mát, trang trí nội thất.</li>
                                    <li><strong>Chính sách:</strong> bảo hành sản phẩm, đổi trả sản phẩm theo chính sách của sản, giao hàng nhanh chóng.</li>
                                </ul>
                            </p>
                            <p>Gia Dụng Home là một trong những shop uy tín cung cấp đồ gia dụng có giá phải chăng. Shop nổi bật với danh mục sản phẩm đa dạng, từ quạt điện, máy xay sinh tố đến nội chiên không dầu, phù hợp cho mọi nhu cầu sinh hoạt mùa hè.</p>

                            <img src={anh2} alt="" />
                            <p className={styles.tienich}><strong>Sản phẩm bán chạy :</strong>
                                <ul>
                                    <li>
                                        <strong>Quạt điện cầm tay mini:</strong> Giá ~50.000 – 200.000 VNĐ, thiết kế nhỏ gọn, tiện lợi cho bàn làm việc hoặc mang đi du lịch.
                                    </li>
                                    <li>
                                        <strong>Máy xay sinh tố đa năng:</strong> Giá ~300.000 VNĐ, công suất, phù hợp làm nước ép, sinh tố mát lạnh.
                                    </li>
                                    <li>
                                        <strong>Vợt bắt muỗi:</strong> Giá ~100.000 VNĐ, tiêu diệt, hạn chế muỗi bảo vệ sức khoẻ trong mùa hè khi mà muỗi sinh sôi phát triển mạnh.
                                    </li>
                                </ul>
                            </p>

                            <h4>2. Casper Official Store</h4>
                            <img src={anh3} alt="" />
                            <p className={styles.tienich}><strong>Thông tin công khai :</strong>
                                <ul>
                                    <li><strong>Đánh giá:</strong> 4.8/5 sao (793 đánh giá).</li>
                                    <li><strong>Số người theo dõi:</strong> 79,7k người</li>
                                    <li><strong>Tỷ lệ phản hồi:</strong> 100% (trả lời tin nhắn trong vài giờ).</li>
                                    <li><strong>Thời gian hoạt động:</strong> hơn 2 năm trên Shopee.</li>
                                    <li><strong>Số lượng sản phẩm:</strong> 81 sản phẩm, chủ yếu là điều hòa, tủ lạnh, máy giặt.</li>
                                    <li><strong>Chính sách:</strong> Bảo hành chính hãng từ 12–36 tháng, đổi trả nếu sản phẩm lỗi.</li>
                                </ul>
                            </p>
                            <p>
                                Casper Official Store là cửa hàng chính thức lớn của thương hiệu Casper, chuyên cung cấp các thiết bị điện tử và gia dụng cao cấp. Shop được yêu thích nhờ sản phẩm chất lượng, chế độ bảo hành rõ ràng và dịch vụ chăm sóc khách hàng tận tình.
                            </p>

                            <p>
                                Tháng này mua sắm nhiều quá kẹt tiền hả! Đừng lo bạn hoàn toàn có thể sử dụng dịch vụ trả sau SPaylater của Shopee mà. Thời hạn trả sau hỗ trợ tối đa lên tới 1 năm luôn đó. Kết hợp với voucher trả sau 0% phí thì hết nước chấm luôn.
                            </p>

                            <p className={styles.tienich}><strong>Sản phẩm bán chạy :</strong>
                                <ul>
                                    <li>
                                        <strong>Máy lạnh Casper Inverter ProAir 1 chiều 1HP JC-09IU36:</strong>
                                        Giá ~6.100.000 VNĐ, tiết kiệm điện, làm mát nhanh.
                                    </li>
                                    <li>
                                        <strong>Máy giặt cửa trên Casper 7.5KG EcoWash WT-75NG1:</strong>
                                        Giá ~3.000.000 VNĐ, lồng giặt bằng thép không gỉ, bền chắc trong suốt quá trình sử dụng,
                                        thiết kế hình giọt nước giúp lồng giặt tác động lên quần áo nhẹ nhàng như giặt tay,
                                        vừa sạch vừa bảo vệ quần áo tối ưu.
                                    </li>
                                    <li>
                                        <strong>Máy lạnh/Điều hòa Casper Inverter 1HP 1 chiều TC-09IS35:</strong>
                                        Giá ~5.400.000 VNĐ, vận hành êm ái, hiệu quả làm lạnh trong 30s
                                        và tiết kiệm điện năng chỉ từ 4.000đ/đêm.
                                    </li>
                                </ul>
                            </p>
                            <h4>3. Bee Bedding – Chăn Ga Gối</h4>
                            <img src={anh3} alt="" style={{ width: '100%' }} />
                            <p className={styles.tienich}><strong>Thông tin công khai :</strong>
                                <ul>
                                    <li><strong>Đánh giá:</strong> 4.8/5 sao (81,5k đánh giá).</li>
                                    <li><strong>Số người theo dõi:</strong> 80,5k người.</li>
                                    <li><strong>Tỷ lệ phản hồi:</strong> 100% (trả lời tin nhắn trong vài giờ).</li>
                                    <li><strong>Thời gian hoạt động:</strong> 5 năm trên Shopee.</li>
                                    <li><strong>Số lượng sản phẩm:</strong> ~91 sản phẩm, chủ yếu là chăn ga gối đệm và đồ gia dụng phòng ngủ.</li>
                                    <li><strong>Chính sách:</strong> Đổi trả, hỗ trợ giao hàng miễn phí, hoàn hàng dễ dàng theo chính sách Shopee.</li>
                                </ul>
                            </p>
                            <p>Bee Bedding chuyên cung cấp các sản phẩm chăn ga gối đệm giúp cải thiện giấc ngủ trong mùa hè nóng bức. Shop được yêu thích nhờ sản phẩm có chất lượng, giá cả hợp lý và thiết kế tinh tế, phù hợp với nhiều phong cách nội thất.</p>

                            <p className={styles.tienich}><strong>Sản phẩm bán chạy :</strong>
                                <ul>
                                    <li>
                                        <strong>Chiếu điều hòa cao su non 5D:</strong> Giá ~200.000 VNĐ, chất liệu thoáng mát, Protein trong cao su tự nhiên có tác dụng ức chế mầm bệnh, ngăn ngừa vi khuẩn, bảo vệ môi trường.
                                    </li>
                                    <li>
                                        <strong>Chăn cotton đũi xơ đậu nành trần bông:</strong> Giá ~130.000 VNĐ, chất liệu thoáng mát thấm hút mồ hôi khi nằm điều hòa sẽ tạo cảm giác cực kì mát mẻ.
                                    </li>
                                    <li>
                                        <strong>Vỏ gối điều hòa cao su non 5D:</strong> Giá ~40.000 VNĐ, lớp ngoài tencel mát lạnh, lớp giữa là cao su non mềm êm, dùng mùa hè thoáng mát, mùa đông giữ nhiệt tốt.
                                    </li>
                                </ul>
                            </p>

                            <h4>4. SMART HOUSE – GIA DỤNG CAO CẤP</h4>
                            <img src={anh4} alt="" style={{ width: '100%' }} />
                            <p className={styles.tienich}><strong>Thông tin công khai :</strong>
                                <ul>
                                    <li><strong>Đánh giá:</strong> 4.8/5 sao (2,2k đánh giá).</li>
                                    <li><strong>Số người theo dõi:</strong> 21,8k người.</li>
                                    <li><strong>Tỷ lệ phản hồi:</strong> 97% (trả lời tin nhắn trong vài giờ).</li>
                                    <li><strong>Thời gian hoạt động:</strong> 4 năm trên Shopee.</li>
                                    <li><strong>Số lượng sản phẩm:</strong> 212 sản phẩm, tập trung vào thiết bị gia dụng như quạt, nồi, xe đạp tập thể dục…</li>
                                    <li><strong>Chính sách:</strong> Bảo hành từ 6–12 tháng, đổi trả nếu sản phẩm bị lỗi.</li>
                                </ul>
                            </p>
                            <p>Smart House Store là điểm đến lý tưởng cho những ai yêu thích các thiết bị gia dụng thông minh. Shop cung cấp các sản phẩm gia dụng tích hợp chăm sóc sức khoẻ, giúp cuộc sống tiện nghi và thoải mái và khoẻ mạnh hơn trong mùa hè</p>

                            <p className={styles.tienich}><strong>Sản phẩm bán chạy :</strong>
                                <ul>
                                    <li>
                                        <strong>Xe đạp tập thể dục tại nhà:</strong> Giá ~1.600.000 VNĐ, độ bền cao, vô cùng chắc chắn và an toàn cho người sử dụng, nhiều chế độ chức năng.
                                    </li>
                                    <li>
                                        <strong>Nồi Ủ Nhiệt Chân Không Inox Dung Tích 5.5L:</strong> Giá ~540.000 VNĐ, nồi ủ đa năng giữ nóng thức ăn lên đến 12h, chắc chắn, không gỉ, sử dụng lâu dài.
                                    </li>
                                    <li>
                                        <strong>Quạt Hơi Nước Điều Hòa Làm Lạnh Không Khí Dung Tích 4L - 65W:</strong> Giá ~500.000 VNĐ, thoải mái sử dụng mà không lo về các vấn đề về sức khỏe như viêm họng, da khô,... Ngoài ra, tấm màng lọc còn góp phần hỗ trợ khử vi khuẩn, vi trùng trong không khí giúp giảm bớt những phần tử kích ứng hệ hô hấp gây ra các căn bệnh ho, hắt hơi, ngứa họng.
                                    </li>
                                </ul>
                            </p>

                            <h4>5. Masuto store online</h4>
                            <img src={anh5} alt="" style={{ width: '100%' }} />
                            <p className={styles.tienich}><strong>Thông tin công khai :</strong>
                                <ul>
                                    <li><strong>Đánh giá:</strong> 4.9/5 sao (23,6k đánh giá)</li>
                                    <li><strong>Số người theo dõi:</strong> 96,9k người</li>
                                    <li><strong>Tỷ lệ phản hồi:</strong> 99% (trả lời tin nhắn trong vài giờ)</li>
                                    <li><strong>Thời gian hoạt động:</strong> 5 năm trên Shopee</li>
                                    <li><strong>Số lượng sản phẩm:</strong> 44 sản phẩm, chủ yếu là thiết bị gia dụng như quạt, đồ dùng nhà bếp, máy xay sinh tố, nồi chiên...</li>
                                    <li><strong>Chính sách:</strong> Bảo hành, đổi trả, giao hàng đóng gói nhanh chóng</li>
                                </ul>
                            </p>
                            <p>Masuto Vietnam chuyên cung cấp các sản phẩm gia dụng nhà bếp và thiết bị bảo vệ sinh thiết yếu, đặc biệt phù hợp với nhu cầu sinh hoạt mùa hè. Shop được đánh giá cao nhờ chất lượng sản phẩm và dịch vụ hậu mãi tốt.</p>

                            <p className={styles.tienich}><strong>Sản phẩm bán chạy :</strong>
                                <ul>
                                    <li>
                                        <strong>Máy Ép Chậm Masuto Ms Healthy:</strong> Giá ~1.400.000 VNĐ, bền bỉ nhất trên thị trường, ít ồn hơn khi vận hành so với DC chổi than đặc biệt không sinh tia lửa điện khi vận hành. Tích hợp chức năng khuấy/đảo/trộn/chống kẹt.
                                    </li>
                                    <li>
                                        <strong>Nồi Chiên Không Dầu Masuto MSKing 6L-1700W 2 Tầng Đốt:</strong> Giá ~1.800.000 VNĐ, công nghệ phun sương kết hợp 2 tầng đốt độc đáo, nâng tầm sức khỏe gia đình với khả năng giảm dầu mỡ đến 90%.
                                    </li>
                                    <li>
                                        <strong>Quạt Điện Cây Masuto Thông Minh AI Điều Khiển Bằng Giọng Nói:</strong> Giá ~1.500.000 VNĐ, điều khiển bằng giọng nói, bổ sung oxy, điều hoà không khí, chế độ gió linh hoạt.
                                    </li>
                                </ul>
                            </p>
                            <p>Cả 5 shop trên đều là những địa chỉ đáng tin cậy để bạn mua sắm những thiết bị gia dụng cho mùa hè trên Shopee. Những thiết bị này không chỉ làm dịu đi cái nóng oi bức mà còn hỗ trợ bảo vệ sức khoẻ cho cả bạn và gia đình nữa đó. Dạo một vòng cửa hàng và rinh chúng về nhà thôi nào!</p>
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
export default New4