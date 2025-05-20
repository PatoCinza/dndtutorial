import React from 'react';
import './Modal.css';
interface ModalProps {
    header: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({header, body, footer, closeModal}) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    {header}
                    <button className="close-button" onClick={closeModal}>×</button>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                {footer && (
                    <div className="modal-footer">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal;
