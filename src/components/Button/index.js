import React from 'react';

const Button = ({title, disabled}) => {
    return (
        <button disabled={disabled}>
            {title}
        </button>
    );
};

export default Button;
