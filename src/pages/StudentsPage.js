import React from 'react';
import { Link } from "react-router-dom";

const StudentsPage = (props) => {
    const studentLinks = props.students.map(item => {
        const studentUrl = "/Students/Student/" + item
        return (
            <li key={item}>
                <Link to={studentUrl}>{item}</Link>
            </li>
        )
    })
    return (
        <div className = "StudentsPage">
            <h1>Studenten</h1>
            <div className = "ListBlock">
                <ul className = "StudentsPageList">
                    {studentLinks}
                </ul>
            </div>
        </div>
    )
}

export default StudentsPage;