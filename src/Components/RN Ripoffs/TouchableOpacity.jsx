import React, { useState } from "react";

const TouchableOpacity = ({ children, onPress }) => {
  const [state, setState] = useState({
    touched: false,
  });

  const toggleTouched = () => {
    setState((prevState) => ({
      ...prevState,
      touched: !prevState.touched,
    }));
  };

  const handleMouseUp = () => {
    setTimeout(() => {
      setState({ touched: false });
    }, 50);
    onPress();
  };

  const className = state.touched ? "btn touched" : "btn";
  return (
    <>
      <button
        className={className}
        onMouseDown={toggleTouched}
        onMouseUp={handleMouseUp}
      >
        {children}
      </button>
    </>
  );
};

export default TouchableOpacity;
