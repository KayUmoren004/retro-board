import React, { useState } from "react";
import Category from "./Category";
import "../App.css";
import TouchableOpacity from "./TouchableOpacity";
import { AlignJustify, MoreHorizontal, MoreVertical } from "react-feather";
import Colors from "./Utils/Colors";

const Container = ({ name }) => {
  const [card1, setCard1] = useState([""]);
  const [card2, setCard2] = useState([""]);
  const [card3, setCard3] = useState([""]);
  const [items1, setItems1] = useState("");
  const [items2, setItems2] = useState("");
  const [items3, setItems3] = useState("");
  const [layout, setLayout] = useState("Layout");
  console.log({
    card1,
    // card2,
    // card3
  });
  return (
    <div>
      <div className="App">
        <div className="Title">{name}</div>
        <div className="Change-Layout">
          <div className="Title">Layout</div>
          <TouchableOpacity onPress={() => setLayout("LayoutAlt")}>
            <MoreHorizontal color={Colors.black} size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLayout("Layout")}>
            <MoreVertical color={Colors.black} size={16} />
          </TouchableOpacity>
        </div>
      </div>
      <div className={layout}>
        <Category
          name="Went Well"
          plus="+"
          state={card1}
          setState={setCard1}
          items={items1}
          setItems={setItems1}
        />
        <Category
          name="To Improve"
          plus="+"
          state={card2}
          setState={setCard2}
          items={items2}
          setItems={setItems2}
        />
        <Category
          name="Action Items"
          plus="+"
          state={card3}
          setState={setCard3}
          items={items3}
          setItems={setItems3}
        />
      </div>
    </div>
  );
};

export default Container;
