import React from 'react';
import Category from "./Category";
import "../App.css"
const Container = () => {
    return (
        <div>
           <div className="Layout">
               <Category name="Went Well" plus="+" RetroItem="1" />
               <Category name="To Improve" plus="+" RetroItem="2" />
               <Category name="Action Items" plus="+" RetroItem="3" />
           </div>


        </div>
    );
};

export default Container;
