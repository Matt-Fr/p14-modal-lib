# React Modal Librairy

A library of a React component created using `create-react-app`.

## How to use

import { Modal } from "matt-fr-react-modal";
import { useState } from "react";

const [openModal, setOpenModal] = useState(false);

<Modal
message="Your Message"
openModal={openModal}
setOpenModal={setOpenModal}/>
