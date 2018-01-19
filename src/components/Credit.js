import React from 'react'

const Credit = (props) => {
    return (
        <div>
            <p>_________________________________________________________________________________</p>
            <p>Description: {props.description}</p>
            <p>Amount: {props.amount}</p>
            <p>Date: {props.date}</p>
            <p>_________________________________________________________________________________</p>
        </div>
    );
};

export default Credit