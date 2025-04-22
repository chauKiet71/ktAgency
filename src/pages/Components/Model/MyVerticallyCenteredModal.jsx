import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../Model/MyVerticallyCenteredModal.module.css"
import { useState } from 'react';
import Flash from "../../../assets/flash.png"


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body >
        <div className={styles.modalTitle}>
          <h4>LIÊN HỆ NGAY VỚI CHÚNG TÔI</h4>
          <button
            className="btn-close"
            aria-label="Close"
            onClick={props.onHide}
          />
        </div>
        <form className={styles.contactForm}>

          <input type="text" placeholder="Họ tên" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Số điện thoại" />
          <select defaultValue="choose">
            <option value="choose">Chọn dịch vụ</option>
            <option value="web">Thiết kế website</option>
            <option value="seo">Dịch vụ SEO</option>
            <option value="ads">Quảng cáo Google/Facebook</option>
          </select>

          <textarea placeholder="Nội dung tin nhắn" ></textarea>

          <div className={styles.btnSend}>
            <button type="submit"> <img src={Flash} alt="" /> Yêu cầu tư vấn <span>miễn phí</span></button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal