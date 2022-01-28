import { useEffect } from 'react';
import styles from './Modal.module.css';

let modalContainer;
let overlay;
let modalTitle;

export default function Modal(props) {

    useEffect (()=>{
        modalContainer = document.getElementById("modal");
        overlay = document.getElementById("overlay");
        modalTitle = document.getElementById("modaltitle");

        if(props.show){
            modalContainer.style.visibility = "visible";
            overlay.style.opacity = "1";
            modalTitle.style.opacity = "1";
            modalTitle.style.transform = 'translate(-50%, -40%)';
        }
        else{
            modalContainer.style.visibility = "hidden";
            overlay.style.opacity = "0";
            modalTitle.style.opacity = "0";
            modalTitle.style.transform = 'translate(-50%, calc(-50% - 200px))';
        }
        
    },[props.show]);

    function toggle(){
        props.next();
    }

    return (
        <div id="modal" className={styles.modalContainer}>
            <div id="overlay" className={styles.overlay}></div>
            
            <div id ="modaltitle" className={styles.modal} role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
                <button aria-label="close modal" className={styles.closeModal} onClick={toggle}>X</button>
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}