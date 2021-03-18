import React from "react";
import colors from "../Utils/colors";

const Cards = ({ title, plus }) => {
  return (
    <div>
      <div>
        <h1
          style={
            title === "Went Well"
              ? { color: colors.green }
              : title === "To Improve"
              ? { color: colors.red }
              : title === "Action Items"
              ? { color: colors.purple }
              : {}
          }
        >
          {title}
        </h1>
      </div>
      <div className="Plus">
        <p>{plus}</p>
      </div>
    </div>
  );
};

export default Cards;
