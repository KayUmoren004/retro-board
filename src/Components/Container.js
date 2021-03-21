import React, {useState} from 'react';
import Category from "./Category";
import "../App.css"

const Container = () => {
    const [card1, setCard1] = useState([""])
    // const [card2, setCard2] = useState([""])
    // const [card3, setCard3] = useState([""])
    // const [items1, setItems1] = useState("")
    // const [items2, setItems2] = useState("")
    // const [items3, setItems3] = useState("")

    console.log({
        card1,
        // card2,
        // card3
    })
    return (
        <div>
            <div className="Layout">
                <Category name="Went Well" plus="+"
                          state={card1}
                          setState={setCard1}
                    // items={items1}
                    // setItems={setItems1}
                />
                <Category name="To Improve" plus="+"
                          state={card1}
                          setState={setCard1}
                    // items={items1}
                    // setItems={setItems1}
                />
                <Category name="Action Items"
                          plus="+"
                          state={card1}
                          setState={setCard1}
                    // items={items1}
                    // setItems={setItems1}
                />
            </div>


        </div>
    );
};

export default Container;