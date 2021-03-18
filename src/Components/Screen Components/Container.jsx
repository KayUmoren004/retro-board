import React from "react";
import "../../App.css";
import ToolBar from "./Toolbar";
import Header from "./Header";
import Cards from "./Cards";

const Container = () => {
  return (
    <div className="App">
      <Header logo="Logo" title="Title" user="User" />
      <ToolBar />
      <div className="Layout">
        <Cards title="Went Well" plus="+" />
        <Cards title="To Improve" plus="+" />
        <Cards title="Action Items" plus="+" />
      </div>
    </div>
  );
};

export default Container;
