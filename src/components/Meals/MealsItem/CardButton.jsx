import React, { useState } from "react";
// import Increment from "./img/increment.png";
// import Decrement from "./img/decrement.png";
// import styled from "styled-components";
import classes from "./MealItem.module.css";

function CardButton(props) {
  const [count, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(props.price);

  const incrementButton = () => {
    setTotal(count + 1);
    setTotalPrice((prev) => +prev + props.price);
  };
  const decrementButton = () => {
    if (count > 0) {
      setTotal(count - 1);
      setTotalPrice((prev) => +prev - props.price);
    }
  };
  return (
    <div>
      <div>
        <button onClick={decrementButton}>-</button>
        <div>{count}</div>
        <button onClick={incrementButton}>+</button>
      </div>
      <p className={classes.price}>total : {Number(totalPrice).toFixed(2)}</p>
    </div>
  );
}

export default CardButton;

// const Img = styled.img`
//   width: 30px;
//   height: 30px;
// `;
// const MainDiv = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 3px;
//   position: relative;
//   left: 750px;
// `;
// const P = styled.p`
//   position: relative;
//   left: 720px;
//   top: 10px;
// `;
