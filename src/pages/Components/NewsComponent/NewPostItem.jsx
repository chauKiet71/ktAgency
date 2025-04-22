import styles from "./NewsComponent.module.css"
import { Link } from "react-router-dom"
const NewPostItem = ({ image, title, date }) => {
    return (
        <>
            <div className={styles.boxPostNew}>
                <div className={styles.boxImagePostNew}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.contentPostNew}>
                    <a href="/public/tin-tuc-moi.html">{title.length > 50 ? title.slice(0, 50) + '...' : title}</a>
                    <p>{date}</p>
                </div>
            </div>
        </>
    )
}

export default NewPostItem