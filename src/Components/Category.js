import React, {useState} from 'react';
import "../App.css"
import RetroItem from "./RetroItem";
const Category = ({name, plus }) => {

    const [card, setCard] = useState([])
    const [items, setItems] = useState("")

    console.log(card)
    return (
        <div>
          <div>
              {name}
          </div>
            <div>
                {plus}
            </div>
            <div className="RST">
                <RetroItem RSTTitle={name} state={card} setState={setCard} item={items} setItem={setItems} />
            </div>
        </div>
    );
};

export default Category;
