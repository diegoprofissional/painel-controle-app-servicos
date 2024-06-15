import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from './Modal.module.css'

const Modal = forwardRef(function Modal({nome}, ref){

    const modal = useRef();

    useImperativeHandle(ref, () => {
       return {
        open() {
          modal.current.showModal()
        }
       }
    })

    return (<dialog className={styles.modalOverlay} ref={modal}>
      usuário {nome} removido com sucesso!
      <form method="dialog">
        <button method="dialog">ok</button>
      </form>
    </dialog>)
})

export default Modal;