import React, { useState } from "react";
import "../../App.css";
import Header from "./Header";
import Categories from "./Categories";

const Container = () => {
  return (
    <div className="App">
      <Header logo="Logo" title="Title" user="User" />
      <div className="Layout">
        <Categories title="Went Well" plus="+" board="1" className="CAT1" />
        <Categories title="To Improve" plus="+" board="2" className="CAT2" />
        <Categories title="Action Items" plus="+" board="3" className="CAT3" />
      </div>
    </div>
  );
};

export default Container;
