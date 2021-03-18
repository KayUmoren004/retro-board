import React from "react";
import "../../App.css";

const ToolBar = ({ Search, Order, Layout, Add, Share, Settings }) => {
  return (
    <div className="ToolBar">
      <div>
        <textarea />
      </div>
      <div>
        <p>Search</p>
      </div>
      <div>
        <p>Order</p>
      </div>
      <div>
        <p>Layout</p>
      </div>
      <div>
        <p>Add</p>
      </div>
      <div>
        <p>Share</p>
      </div>
      <div>
        <p>Settings</p>
      </div>
    </div>
  );
};

export default ToolBar;
