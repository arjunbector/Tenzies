import React, { useState } from "react";
import { Dice } from "../Dice/Dice";
import styles from "./Game.module.css";
import { nanoid } from "nanoid";
export const Game = () => {
  const createRandomArray = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value:Math.ceil(Math.random() * (6)),
        isHeld : false,
        id:nanoid(),
      });
    }
    return arr;
  };
  
  const generateNewDice = ()=>{
    return ({
      value:Math.ceil(Math.random() * (6)),
      isHeld : false,
      id:nanoid(),
    })
  }

  const [diceArray, setDiceArray] = useState(createRandomArray());

  const holdDice = (id)=>{
    console.log(id);
    
    setDiceArray(oldDiceArray => oldDiceArray.map(dice=>{
      return dice.id === id ? 
      {...dice, isHeld : !dice.isHeld}:
      dice
    }))

  }



  // const handleClick = ()=>{
  //   setDiceArray(createRandomArray());

  //   setDiceArray(prevDiceArray=> prevDiceArray.map(dice=>{
  //     return !isHeld?
  //     {generateNewDice()}
  //   }))

  // }


  const diceElements = diceArray.map((dice) => 
  <Dice key={dice.id} 
  value={dice.value}
  isHeld = {dice.isHeld}
  holdDice = {holdDice}
  id = {dice.id}
   />);

  return (
    <>
    
    <div className={styles.dice_wrapper}>
      {diceElements}
    </div>
      <button className={styles.btn}
      onClick={handleClick}>Roll</button>
    </>
  );
};
