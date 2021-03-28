import React from "react";

const Textarea = ({ value, placeholder, onChange, onKeyDown }) => {
  return (
    <div>
      <textarea
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
