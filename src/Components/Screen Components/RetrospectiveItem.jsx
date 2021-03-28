import React from "react";
import "../../App.css";
import colors from "../Utils/colors";
import { ChevronLeft, ChevronRight, X } from "react-feather";
import TouchableOpacity from "../RN Ripoffs/TouchableOpacity";

const RetrospectiveItem = ({ item, RTtitle, setState, state }) => {
  const handleChange = () => {
    setState([...state, item]);
  };
  return (
    <div
      className="RSTItem"
      style={
        RTtitle === "Went Well"
          ? { backgroundColor: colors.green }
          : RTtitle === "To Improve"
          ? { backgroundColor: colors.red }
          : RTtitle === "Action Items"
          ? { backgroundColor: colors.purple }
          : {}
      }
    >
      <div className="RSTItemText">
        <div>
          <textarea
            value={item}
            placeholder="Enter text here"
            onChange={(e) => setState(e.target.value)}
          />
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
      </div>
    </div>
  );
};

export default RetrospectiveItem;
