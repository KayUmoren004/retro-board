import React, { useState } from "react";
import colors from "../Utils/colors";
import RetrospectiveItem from "./RetrospectiveItem";

const Categories = ({ title, plus, board, className }) => {
  const [item, setItem] = useState([""]);
  const [items, setItems] = useState("");

  console.log(item);
  return (
    <div className={className}>
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
      <div>
        {item.map((subItems, idx) => {
          return (
            <RetrospectiveItem
              key={idx}
              item={subItems}
              RTtitle={title}
              setState={setItem}
              state={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
