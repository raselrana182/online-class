import React from 'react';
import './Subjects.css'

const Subjects = (props) => {
    const {title,balance, picture} = props.subjects
    // console.log(props.subjects.title);
    return (
        <div className = "subject-part">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div>
                <h4 className ='subject-name'>{title}</h4>
                <br/>
                <p><small>Price: {balance}</small></p>
            </div>
        </div>
    );
};

export default Subjects;