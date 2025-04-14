import { Link } from "react-router-dom"
import styles from "./NewsComponent.module.css"

const NewsItem = ({ image, title, description, link }) => {
    return (
        <>
            <div className={styles.postNews}>
                <div className={styles.boxImage}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.boxContent}>
                    <h4>{title.length > 100 ? title.slice(0, 100) + '...' : title}</h4>
                    <p>{description.length > 130 ? description.slice(0, 130) + '...' : description}</p>
                    <Link to={link}>Xem thêm</Link>
                </div>
            </div>
        </>
    )
}
export default NewsItem