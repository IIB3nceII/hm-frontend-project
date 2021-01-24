import React from 'react';
import './AdCard.css';

function AdCard({title,text,buttons,bgColor,textColor}) {
    
    return (
        <div className="adCard" style={{backgroundColor:bgColor}}>
            <h1 style={{color:textColor}}>{title}</h1>
            <p style={{color:textColor}}>{text}</p>
            {buttons ? (
                <div className="adCard_buttons">
                    <button style={{color:textColor}}><p>Woman</p></button>
                    <button style={{color:textColor}}><p>Devided</p></button>
                    <button style={{color:textColor}}><p>Men</p></button>
                    <button style={{color:textColor}}><p>Kids</p></button>
                </div>
            ) : (null)}
        </div>
    )
}

export default AdCard;