import React, { useState } from "react";
import Category from "./Category";
import "../App.css";
import TouchableOpacity from "./TouchableOpacity";
import { MoreHorizontal, MoreVertical } from "react-feather";
import Colors from "./Utils/Colors";

const Container = ({ name }) => {
  const [WentWell, setWentWell] = useState([]);
  const [ToImprove, setToImprove] = useState([]);
  const [ActionItems, setActionItems] = useState([]);
  const [WentWellItems, setWentWellItems] = useState("");
  const [ToImproveItems, setToImproveItems] = useState("");
  const [ActionItemsItems, setActionItemsItems] = useState("");
  const [layout, setLayout] = useState("Layout");

  const MoveItemsRight = (idx, count) => {
    switch (count) {
      case 0:
        setWentWell(
          [...WentWell].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setToImprove([...ToImprove, WentWell[idx]]);

        break;

      case 1:
        setToImprove(
          [...ToImprove].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setActionItems([...ActionItems, ToImprove[idx]]);
        break;

      case 2:
        setActionItems(
          [...ActionItems].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setWentWell([...WentWell, ActionItems[idx]]);

        break;

      default:
        break;
    }
  };

  const MoveItemsLeft = (idx, antiCount) => {
    switch (antiCount) {
      case 2:
        setWentWell(
          [...WentWell].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setActionItems([...ActionItems, WentWell[idx]]);

        break;

      case 0:
        setActionItems(
          [...ActionItems].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setToImprove([...ToImprove, ActionItems[idx]]);
        break;

      case 1:
        setToImprove(
          [...ToImprove].filter((itm, currentIdx) => currentIdx !== idx)
        );
        setWentWell([...WentWell, ToImprove[idx]]);

        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="App">
        <div className="Title">{name}</div>
        <div className="Change-Layout">
          <div className="Title">Layout</div>
          <TouchableOpacity onPress={() => setLayout("Layout")}>
            <MoreHorizontal color={Colors.black} size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setLayout("LayoutAlt")}>
            <MoreVertical color={Colors.black} size={16} />
          </TouchableOpacity>
        </div>
      </div>
      <div className={layout}>
        <Category
          name="Went Well"
          plus="+"
          state={WentWell}
          setState={setWentWell}
          items={WentWellItems}
          setItems={setWentWellItems}
          layout={layout}
          setLayout={setLayout}
          MoveRight={MoveItemsRight}
          MoveLeft={MoveItemsLeft}
          Count={0}
          AntiCount={2}
        />
        <Category
          name="To Improve"
          plus="+"
          state={ToImprove}
          setState={setToImprove}
          items={ToImproveItems}
          setItems={setToImproveItems}
          layout={layout}
          MoveLeft={MoveItemsLeft}
          MoveRight={MoveItemsRight}
          setLayout={setLayout}
          Count={1}
          AntiCount={1}
        />
        <Category
          name="Action Items"
          plus="+"
          state={ActionItems}
          setState={setActionItems}
          items={ActionItemsItems}
          setItems={setActionItemsItems}
          layout={layout}
          MoveLeft={MoveItemsLeft}
          MoveRight={MoveItemsRight}
          setLayout={setLayout}
          Count={2}
          AntiCount={0}
        />
      </div>
    </div>
  );
};

export default Container;
