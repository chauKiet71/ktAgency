import Logo from "../assets/logo.png"
import Service from "../assets/service.jpg"
import { FaUserPlus, FaUsers, FaBuffer, FaLaptop, FaBars, FaTimes } from "react-icons/fa";

import Banner1 from "../assets/banner.png"
import { Link, useLocation } from "react-router-dom"
import styles from "../header/Header.module.css"
import { useEffect, useState } from "react";
import clsx from "clsx";
import MyVerticallyCenteredModal from "../pages/Components/Model/MyVerticallyCenteredModal"



const Header = () => {

    const [modalShow, setModalShow] = useState(false);
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* header */}
            <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
                <div className="container">
                    <div className={clsx(styles.menu)}>
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
                                        <li className={isActive('/quang-cao-facebook') ? styles.active : ''}>
                                            <Link to='/quang-cao-facebook'>Chạy quảng cáo Facebook</Link>
                                        </li>
                                        <li className={isActive('/ho-tro-facebook') ? styles.active : ''}>
                                            <Link to='/ho-tro-facebook'>Hỗ trợ Facebook</Link>
                                        </li>
                                        <li className={isActive('/landing-page') ? styles.active : ''}>
                                            <Link to='/landing-page'>Thiết kế Landing page</Link>
                                        </li>
                                        <li className={isActive('/website') ? styles.active : ''}>
                                            <Link to='/website'>Thiết kế Website</Link>
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
                            <span className={styles.btn} onClick={() => setModalShow(true)}>ĐĂNG KÝ TƯ VẤN</span>
                        </div>
                    </div>
                </div>
            </header>
            {/* mobile */}
            <header className={`${styles.headerMobile} ${isSticky ? styles.sticky : ""}`}>
                <div className="container">
                    <div className={styles.navMenu}>

                        <Link to='/'>
                            <div className={styles.boxMobileLeft}>
                                <img src={Logo} alt="" />
                            </div>
                        </Link>

                        <div className={styles.boxMobileRight}>
                            <input type="checkbox" id="clickCheck" hidden className={styles.menuToggle} />
                            <label htmlFor="clickCheck" className={styles.menuIcon}><FaBars /></label>

                            <div className={styles.menuMobile}>

                                <ul className={styles.navList}>
                                    <li className={clsx(styles.headerMenu, "mt-3")}>
                                        <img src={Logo} alt="" />
                                        <label htmlFor="clickCheck"><FaTimes /></label>
                                    </li>
                                    <hr />
                                    <li className={isActive('/') ? styles.active : ''}>
                                        <Link to="/">TRANG CHỦ</Link>
                                    </li>
                                    <li className={isActive('/gioi-thieu') ? styles.active : ''}>
                                        <Link to="/gioi-thieu">GIỚI THIỆU</Link>
                                    </li>
                                    <li className={styles.service}>
                                        <Link>DỊCH VỤ</Link>
                                        <ul className={styles.subMenu}>
                                            <li className={isActive('/quang-cao-facebook') ? styles.active : ''}>
                                                <Link to="/quang-cao-facebook">Chạy quảng cáo Facebook</Link>
                                            </li>
                                            <li className={isActive('/ho-tro-facebook') ? styles.active : ''}>
                                                <Link to="/ho-tro-facebook">Hỗ trợ Facebook</Link>
                                            </li>
                                            <li className={isActive('/landing-page') ? styles.active : ''}>
                                                <Link to="/landing-page">Thiết kế Landing page</Link>
                                            </li>
                                            <li className={isActive('/website') ? styles.active : ''}>
                                                <Link to="/website">Thiết kế Website</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={isActive('/tin-tuc') ? styles.active : ''}>
                                        <Link to="/tin-tuc">TIN TỨC</Link>
                                    </li>
                                    <li className={isActive('/lien-he') ? styles.active : ''}>
                                        <Link to="/lien-he">LIÊN HỆ</Link>
                                    </li>
                                </ul>
                            </div>
                            <label htmlFor="clickCheck" className={styles.overlay}></label>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}
export default Header