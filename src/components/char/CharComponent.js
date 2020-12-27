import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        'text-align': 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return (
        <div style={style}>
            <p>{props.character}</p>
        </div>
    );
}

export default charComponent;