import React from 'react';
import '../app.css';
export default function Poster({url, title}) {
    return(
        <div className = "movies-list">
            <img src={url} className = "movie-poster" />
            <span className = "movies-title">{title}</span>
        </div>
    )
}
