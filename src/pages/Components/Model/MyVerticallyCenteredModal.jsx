import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "../Model/MyVerticallyCenteredModal.module.css"
import { useState } from 'react';
import Flash from "../../../assets/flash.png"
import bgLienHe from "../../../assets/bglienhe.png"


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      {/* <Modal.Body > */}
        <div className={styles.modalTitle}>
          <button
            className="btn-close"
            aria-label="Close"
            onClick={props.onHide}
          />
        </div>
        <img src={bgLienHe} className={styles.imageLienHe} alt="" />
      {/* </Modal.Body> */}
    </Modal>
  );
}

export default MyVerticallyCenteredModal

