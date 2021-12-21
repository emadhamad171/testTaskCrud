import classNames from 'classnames';
import React from 'react';


const Modal = ({isOpen, overlayHandleClick, size, className, children}) => {
    return (
        <>
            {isOpen && (
                <div className='modal-overlay' onClick={overlayHandleClick}>
                    <div
                        className={classNames('modal', size && `modal--${size}`, className)}
                        onClick={e => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
