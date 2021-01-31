import React from 'react';
import '../app.css';
export default function Header ({title}) {
    return (
        <div className = "header-container">
            <span className = "header-subtitle">{title}</span>
        </div>
    )
}