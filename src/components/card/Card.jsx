import "./Card.css"
import { useState } from "react";

const Card = ({ name, img, options }) => {

  const [isDisplay, setIsDisplay] = useState(true);

  return (
    <div className="cardUnit" onClick={() => setIsDisplay(!isDisplay)}>
      {isDisplay && <><img src={img} alt={name} width="150"/>
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