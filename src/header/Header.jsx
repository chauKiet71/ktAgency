import Logo from "../assets/logo.png"
import Service from "../assets/service.jpg"
import { FaUserPlus, FaUsers, FaBuffer, FaLaptop } from "react-icons/fa";

import Banner1 from "../assets/banner.png"
import { Link } from "react-router-dom"
import styles from "../header/Header.module.css"


const Header = () => {
    return (
        <>
            {/* header */}
            <header>
                <div className="container">
                    <div className={styles.menu}>
                        <a href="">
                            <img src={Logo} alt="" />
                        </a>
                        <div className={styles.boxRight}>
                            <ul>
                                <li><Link>TRANG CHỦ</Link></li>
                                <li><Link>GIỚI THIỆU</Link></li>
                                <li><Link>DỊCH VỤ</Link></li>
                                <li><Link>TIN TỨC</Link></li>
                                <li><Link>LIÊN HỆ</Link></li>
                            </ul>
                            <span>ĐĂNG KÝ TƯ VẤN</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header