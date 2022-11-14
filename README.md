# React Modal Librairy

A library of a React component created using `create-react-app`.
This component is a modal in which you can place a message in it, the modal will be in the center of your page.

## How to install

run the following command :

```sh
npm i matt-fr-react-modal
```

## How to use

```sh
import { Modal } from "matt-fr-react-modal";
import { useState } from "react";

const [openModal, setOpenModal] = useState(false);

<Modal
message="Your Message"
openModal={openModal}
setOpenModal={setOpenModal}/>
```
