import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NewsComponent.module.css";
import clsx from "clsx";

const NewsItem = ({ image, title, description, link }) => {
    const [titleLimit, setTitleLimit] = useState(100);
    const [descLimit, setDescLimit] = useState(130);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 576) {
                setTitleLimit(50);
                setDescLimit(80);
            } else {
                setTitleLimit(100);
                setDescLimit(130);
            }
        };

        handleResize(); // chạy ngay khi component được mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const truncate = (text, limit) => {
        return text?.length > limit ? text.slice(0, limit) + "..." : text;
    };

    return (
        <div className={styles.postNews}>
            <div className={clsx("row", styles.boxNews)}>
                <div className="col-lg-4 mt-3">
                    <div className={styles.boxImage}>
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="col-lg-8 mt-3">
                    <div className={styles.boxContent}>
                        <h4>{truncate(title, titleLimit)}</h4>
                        <p>{truncate(description, descLimit)}</p>
                        <Link to={link}>Xem thêm</Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NewsItem;
