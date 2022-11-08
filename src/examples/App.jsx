import React, { useState } from 'react';
import Modal from '../lib/Modal'

const App = () => {

 const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        Open the modal!!
      </button>
      <Modal
        message="Employee Created"
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></Modal>
    </div>
  )};

export default App;