import React, { useRef, useEffect } from 'react'
import "./Modal.css"

const Modal = ({open, setOpen, closeOnClick, children}) => {
    const dialogRef = useRef();
    const lastActiveElement = useRef();

    useEffect(() => {
        if (open){
            lastActiveElement.current = document.activeElement;
            dialogRef.current.showModal()

        }else {
            dialogRef.current.close();
            lastActiveElement.current?.focus();
        }
    }, [open]);

    useEffect(() => {
        const dialogNode = dialogRef.current;
        const handleCancel = (event) => {
            event.preventDefault();
            setOpen(false);
     
        };
        dialogNode.addEventListener("cancel", handleCancel);

        return () => {
            dialogNode.removeEventListener("cancel", handleCancel);
        };
        
    }, [setOpen]);

    const handleCloseonClick = (event) => {
        if(closeOnClick && event.target === dialogRef.current){
            setOpen(false);
        }
    };

  return ( 
    <dialog ref={dialogRef} onClick={handleCloseonClick}>{children}</dialog>
  )
    
  
}

export default Modal
