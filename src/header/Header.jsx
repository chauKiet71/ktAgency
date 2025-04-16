import Logo from "../assets/logo.png"
import Service from "../assets/service.jpg"
import { FaUserPlus, FaUsers, FaBuffer, FaLaptop } from "react-icons/fa";

import Banner1 from "../assets/banner.png"
import { Link, useLocation } from "react-router-dom"
import styles from "../header/Header.module.css"
import { useEffect, useState } from "react";


const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const location = useLocation();
    const isActive = (path) => location.pathname === path;


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/* header */}
            <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
                <div className="container">
                    <div className={styles.menu}>
                        <Link to='/'>
                            <img src={Logo} alt="" />
                        </Link>
                        <div className={styles.boxRight}>
                            <ul>
                                <li className={isActive('/') ? styles.active : ''}>
                                    <Link to='/'>TRANG CHỦ</Link>
                                </li>
                                <li className={isActive('/gioi-thieu') ? styles.active : ''}>
                                    <Link to='/gioi-thieu'>GIỚI THIỆU</Link>
                                </li>
                                <li className={styles.service}>
                                    <Link>DỊCH VỤ</Link>
                                    <ul className={styles.subMenu}>
                                        <li className={isActive('/landing-page') ? styles.active : ''}>
                                            <Link to='/landing-page'>Thiết kế Landing page</Link>
                                        </li>
                                        <li className={isActive('/quang-cao-facebook') ? styles.active : ''}>
                                            <Link to='/quang-cao-facebook'>Chạy quảng cáo Facebook</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={isActive('/tin-tuc') ? styles.active : ''}>
                                    <Link to='/tin-tuc'>TIN TỨC</Link>
                                </li>
                                <li className={isActive('/lien-he') ? styles.active : ''}>
                                    <Link to='/lien-he'>LIÊN HỆ</Link>
                                </li>
                            </ul>
                            <span className={styles.btn}>ĐĂNG KÝ TƯ VẤN</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header