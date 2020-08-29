import React, { useState, useEffect} from 'react';
import data from '../../data/data.json';
import './Course.css';
import Subjects from '../Subjects/Subjects';

const Course = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() =>{
        setCourses(data);
    })
    return (
        <div className = "container">
            <div className="course-container">
                {
                    courses.map(course => <Subjects subjects= {course}>{course.title}</Subjects>)
                }
            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
            </div>
            
        </div>
    );
};

export default Course;