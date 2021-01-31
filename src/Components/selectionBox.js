import React from 'react';
import '../app.css';
export default function SelectionBox({title, subtitle, onPress}) {
    return(
        <div className = "selection-box-container" onClick = {onPress}>
            <div className = "selection-box">
                <span className = "selection-box-title">{title}</span>
            </div>
            <div>
            <span className = "selection-box-subtitle">{subtitle}</span>
            </div>
        </div>
    )
}