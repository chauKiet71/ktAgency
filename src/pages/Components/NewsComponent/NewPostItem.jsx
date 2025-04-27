import styles from "./NewsComponent.module.css"
import { Link } from "react-router-dom"

const NewPostItem = ({ image, title, links, views }) => {
    return (
        <>
            <div className={styles.boxPostNew}>
                <div className={styles.boxImagePostNew}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.contentPostNew}>
                    <Link to={views} className={styles.ttNews}>{title.length > 50 ? title.slice(0, 50) + '...' : title}</Link>

                    <Link to={views} className={styles.action}>XEM NGAY</Link>
                </div>
            </div>
        </>
    )
}

export default NewPostItem