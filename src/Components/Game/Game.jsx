import React, { useEffect, useState } from "react";
import { Dice } from "../Dice/Dice";
import styles from "./Game.module.css";
import { nanoid } from "nanoid";

export const Game = () => {

  const [gameOver, setGameOver] = useState(false); 

  const createRandomArray = () => { // Function to create an array of random dice objects
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(), // Gives a unique ID to the object
      });
    }
    return arr;
  };

  const generateNewDice = () => { // Function to create a single random dice object
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  };

  const [diceArray, setDiceArray] = useState(createRandomArray());

  const holdDice = (id) => {  //Change the isHeld property of the dice object 
    setDiceArray((oldDiceArray) =>
      oldDiceArray.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  };

  const handleClick = () => {
    setDiceArray((prevDiceArray) =>
      prevDiceArray.map((dice) => {
        return !dice.isHeld ? generateNewDice() : { ...dice };
      })
    );
  };

  const checkNumbers = () => {
    for (let i = 1; i < diceArray.length; i++) {
      if (diceArray[i]["value"]!== diceArray[0]["value"] || !diceArray[i].isHeld) { 
        // Checks whether each value of the dice object is equal to first one
        // and all the dice isHeld property is true
        return false;
      }
    }
    return true;
  };


  useEffect(() => {
    checkNumbers();
    setGameOver(checkNumbers());
  }, [diceArray]);


  const resetGame = ()=>{
    setDiceArray(createRandomArray());
    setGameOver(false);
  }

  const diceElements = diceArray.map((dice) => (
    <Dice
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={holdDice}
      id={dice.id}
    />
  ));

  return (
    <>
      <div className={styles.dice_wrapper}>{diceElements}</div>
      {gameOver?<button className={styles.btn} onClick={resetGame}>
        Restart
      </button>:
      <button className={styles.btn} onClick={handleClick}>
      Roll
    </button>}
    </>
  );
};
