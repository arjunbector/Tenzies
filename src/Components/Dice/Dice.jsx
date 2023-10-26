import React from "react";
import styles from './Dice.module.css'

export const Dice = (props) => {


  return <div 
  className={styles.dice}
  style={{
    backgroundColor : props.isHeld ? "#59E391" : "#FFFFFF"
  }}
  onClick={()=>{
    props.holdDice(props.id)
  }}>
    {props.value}
    </div>;
};
