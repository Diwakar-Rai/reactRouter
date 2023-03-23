import React from "react";
import useBoolean from "./useBoolean";

const UseBooleanExample = () => {
  const [isToggle, { setToggle }] = useBoolean(false);
  return (
    <div>
      <button onClick={setToggle}>toggle</button>
      {isToggle?.toString()}
    </div>
  );
};

export default UseBooleanExample;
