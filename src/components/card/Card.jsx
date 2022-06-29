import "./Card.css"
import { useState,useEffect } from "react";

const Card = ({ name, img, options }) => {

  const [isDisplay, setIsDisplay] = useState(true);

  const changer = () =>{
    setIsDisplay(() => !isDisplay);
  }
  useEffect(()=>{
    if(!isDisplay){
      setTimeout(()=>setIsDisplay(!isDisplay),1000);
    }},[isDisplay]);

  // const changer = () => {
  //   setIsDisplay(!isDisplay);
  // }
  // if (!isDisplay) {
  //   setTimeout(() => setIsDisplay(!isDisplay), 1000);
  // }
  return (
    <div className="cardUnit" onClick={() => changer()}>
      {isDisplay && <><img src={img} alt={name} width="150" />
        <h3>{name}</h3></>}

      {!isDisplay && <ul>
        <li>{options[0]}</li>
        <li>{options[1]}</li>
        <li>{options[2]}</li>
      </ul>}
    </div>
  )
}

export default Card