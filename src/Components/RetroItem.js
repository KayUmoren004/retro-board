import React from 'react';
import Colors from "./Utils/Colors";
import TouchableOpacity from "./TouchableOpacity";
import {ChevronLeft, ChevronRight, X} from "react-feather";
const RetroItem = ({state, setState, item, RSTTitle, setItem}) => {
    const addToCard = ({target}) => {
        setItem(target.value);
           setState((state) => [...state, item])

    }
    /*const updateFunction = ({ target }) => {

    };*/
    return (
        <div style={
            RSTTitle === "Went Well"
                ? {backgroundColor: Colors.green}
                : RSTTitle === "To Improve"
                ? {backgroundColor: Colors.red}
                :RSTTitle === "Action Items"
                    ? {backgroundColor: Colors.purple}
                    : {}
        }>
           <div className="RSTItemText">
               <textarea
                    value={item}
                    placeholder="Enter text here"
                    onChange={addToCard}
                  /*  onKeyDown={() => addToCard()}*/
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
    );
};

export default RetroItem;
