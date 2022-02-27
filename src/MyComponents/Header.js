import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link className="page-title" to="/">ToDo App</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}
