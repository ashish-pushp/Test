import React from 'react';
import '../app.css';
import Poster from "../Components/poster"
export default function ShowStream({data}) {
    return(
        <div className = "movies-container">
          {
            data.map((item, index) => {
              return(
                <Poster 
                    url = {item.images['Poster Art'].url}
                    title = {item.title}
                />
              )
            })
          }
        </div>
    )
}
