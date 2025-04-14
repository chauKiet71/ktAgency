import Header from "../../header/Header"
import Footer from "../../footer/Footer"

import ImageNews from "../../assets/imageNews.jpg"
import NewsItem from "../Components/NewsComponent/NewsItem"
import NewsPostItem from "../Components/NewsComponent/NewPostItem"
import styles from "../News/News.module.css"


const News = () => {

    const listNews = [
        {
            'id': 1,
            'image': ImageNews,
            'title': 'Email Server là gì? 5 Lý do tại sao Email ServLý do tại sao Email ServLý do tại sao Email ServLý do tại sao Email ServLý do tại sao Email Server lại quan trọng.',
            'description': 'Email server là gì và tại sao email server lại quan trọng? Tìm hiểu lý do về tính qhiểu lý do về tính qhiểu lý do về tính qhiểu lý do về tính qhiểu lý do về tính qhiểu lý do về tính quan trọng',
            'link': '/tai-sao-email-server-lai-quan-trong'
        },
        {
            'id': 2,
            'image': ImageNews,
            'title': 'Email Server là gì? 5 Lý do tại sao Email Server lại quan trọng.',
            'description': 'Email server là gì và tại sao email server lại quan trọng? Tìm hiểu lý do về tính quan trọng',
            'link': '/tai-sao-email-server-lai-quan-trong'
        }
    ]

    const listNewsPost = [
        {
            'id': 1,
            'image': ImageNews,
            'title': 'Quảng cáo Facebook như thế nào là hiệu quả',
            'date': '05 Tháng 01, 2024',
        }
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