import React from "react";
import Colors from "./Utils/Colors";
import TouchableOpacity from "./TouchableOpacity";
import { Check, ChevronLeft, ChevronRight, X } from "react-feather";
import Textarea from "./Textarea";

const RetroItem = ({ state, item, RSTTitle, updateItem, newItem }) => {
  return (
    <div
      style={
        RSTTitle === "Went Well"
          ? { backgroundColor: Colors.green }
          : RSTTitle === "To Improve"
          ? { backgroundColor: Colors.red }
          : RSTTitle === "Action Items"
          ? { backgroundColor: Colors.purple }
          : {}
      }
    >
      <div className="RSTItemText">
        <Textarea
          //value={item}
          placeholder="Enter text here"
          onChange={() => updateItem}
          onKeyDown={newItem}
        />
        <TouchableOpacity onPress={newItem}>
          <Check color="white" size={25} />
        </TouchableOpacity>
      </div>
      <div className="Lola">
        <TouchableOpacity onPress={() => console.log("Left")}>
          <ChevronLeft color="white" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Delete")}>
          <X color="white" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Right")}>
          <ChevronRight color="white" size={25} />
        </TouchableOpacity>
      </div>
      <p>{state.name}</p>
    </div>
  );
};

export default RetroItem;
