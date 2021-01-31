import React from 'react';
import '../app.css';
export default function SubHeader ({title}) {
    return (
        <div className = "sub-header-container">
          <span className = "sub-header-subtitle">{title}</span>
        </div>
    )
}