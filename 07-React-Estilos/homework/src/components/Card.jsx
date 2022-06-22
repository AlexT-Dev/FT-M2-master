import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <div className={s.columElements}>
          <div className={s.container}>
            <button className={s.btnClose} onClick={props.onClose} >X</button>
            <h4 className={s.tituloCard}>{props.name}</h4>
            <div className={s.grid}>
              <div className={s.divData}>
                <p className={s.colorData}>Min</p>  
                <p>{props.min}</p>
              </div>
              <div className={s.divData}>
                <p className={s.colorData}>Max</p>
                <p>{props.max}</p>
              </div>
              <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen no encontrada" />
            </div>
          </div>
        </div>
        </div>    
  )
};