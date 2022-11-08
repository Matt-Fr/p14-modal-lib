import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Modal.module.css'
import { AiFillCloseCircle } from "react-icons/ai";


export const Modal = ({ message, openModal, setOpenModal }) => {
  return (
    openModal && (
      <div
        className={styles.background}
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <div
          className={styles.backgroundContainer}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <h3 className={styles.backgroundContainertitle}>{message}</h3>
          <AiFillCloseCircle className={styles.closeIcon} />
        </div>
      </div>
    )
  );
};

