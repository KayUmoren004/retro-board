import React from "react";
import "../App.css";
// import RetroItem from "./RetroItem";
import Colors from "./Utils/Colors";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
  Check,
} from "react-feather";
import TouchableOpacity from "./TouchableOpacity";

const Category = ({
  name,
  plus,
  state,
  setState,
  layout,
}) => {
 
  const DeleteItems = (indexToDelete) => {
    setState([...state].filter((item, idx) => idx !== indexToDelete));
  };

  const LeftLayout = () => {
    if (layout === "Layout") {
      return (
        <TouchableOpacity onPress={() => console.log("Left")}>
          <ChevronLeft color="white" size={25} />
        </TouchableOpacity>
      );
    } else if (layout === "LayoutAlt") {
      return (
        <TouchableOpacity onPress={() => console.log("Left")}>
          <ChevronDown color="white" size={25} />
        </TouchableOpacity>
      );
    }
  };

  const RightLayout = () => {
    if (layout === "Layout") {
      return (
        <TouchableOpacity onPress={() => console.log("Right")}>
          <ChevronRight color="white" size={25} />
        </TouchableOpacity>
      );
    } else if (layout === "LayoutAlt") {
      return (
        <TouchableOpacity onPress={() => console.log("Right")}>
          <ChevronUp color="white" size={25} />
        </TouchableOpacity>
      );
    }
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
            <div
              key={idx}
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
                <TouchableOpacity onPress={newItemCheck}>
                  <Check color="white" size={15} />
                </TouchableOpacity>
              </div>
              <div className="Lola">
                <LeftLayout />
                <TouchableOpacity onPress={() => DeleteItems(idx)}>
                  <X color="white" size={25} />
                </TouchableOpacity>
                <RightLayout />
              </div>
              <p />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
