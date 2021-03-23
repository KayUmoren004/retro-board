import React, { useState } from "react";
import "../App.css";
// import RetroItem from "./RetroItem";
import Colors from "./Utils/Colors";
import { Check, ChevronLeft, ChevronRight, X } from "react-feather";
import TouchableOpacity from "./TouchableOpacity";

const Category = ({ name, plus, state, setState, items, setItems }) => {
  /*
    const addToCardKeyPressed = (e) => {
        if (e.key === "Enter") {
            let lineCount = 0
            if (e.keyCode === 13) {
                lineCount++
                setState([...state, ""])

            }
            if (lineCount >= 1) {
                e.preventDefault()
                return false
            }

        }
    }
    const updateFunction = (userInput, idx) => {
       const newState = [...state]
        newState[idx] = userInput
        setState(newState)

    };
    * */

  const DeleteItems = (indexToDelete) => {
    setState([...state].filter((item, idx) => idx !== indexToDelete));
  };

  const newItem = (e) => {
    if (e.key === "Enter") {
      let lineCount = 0;
      if (e.keyCode === 13) {
        lineCount++;
        setState([...state, ""]);
      }
      if (lineCount >= 1) {
        e.preventDefault();
        return false;
      }
    }
  };
  const newItemCheck = () => {
    setState([...state, ""]);
  };
  const updateItem = (userInput, idx) => {
    const newState = [...state];
    newState[idx] = userInput;
    setState(newState);
  };

  return (
    <div>
      <div>{name}</div>
      <TouchableOpacity onPress={() => newItemCheck()} styleName="Plus">
        {plus}
      </TouchableOpacity>
      <div className="RST">
        {state.map((subCards, idx) => {
          return (
            // <RetroItem
            //     key={idx}
            //     RSTTitle={name}
            //     state={state}
            //     setState={setState}
            //     item={subCards}
            //     onChange={e => updateItem(e.target.value, idx)}
            //     onKeyDown={newItem}
            //     // setItem={setItems}
            // />
            <div
              style={
                name === "Went Well"
                  ? { backgroundColor: Colors.green }
                  : name === "To Improve"
                  ? { backgroundColor: Colors.red }
                  : name === "Action Items"
                  ? { backgroundColor: Colors.purple }
                  : {}
              }
            >
              <div className="RSTItemText">
                <textarea
                  value={subCards}
                  placeholder="Enter text here"
                  aria-label="Enter text here"
                  onChange={(e) => updateItem(e.target.value, idx)}
                  onKeyDown={newItem}
                />
                {/*<TouchableOpacity onPress={newItemCheck}>*/}
                {/*    <Check color="white" size={25}/>*/}
                {/*</TouchableOpacity>*/}
              </div>
              <div className="Lola">
                <TouchableOpacity onPress={() => console.log("Left")}>
                  <ChevronLeft color="white" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => DeleteItems(idx)}>
                  <X color="white" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Right")}>
                  <ChevronRight color="white" size={25} />
                </TouchableOpacity>
              </div>
              <p>{state.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
