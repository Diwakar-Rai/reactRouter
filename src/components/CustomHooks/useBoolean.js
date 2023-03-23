import { useState } from "react";

const useBoolean = () => {
    let [state, setState] = useState();

    let handleTrue = () => setState(true);
    let handleFalse = () => setState(false);
    let handleToggle = () => setState(!state);
  return [
    state,
    { setTrue: handleTrue, setFalse: handleFalse, setToggle: handleToggle },
  ];
};

export default useBoolean;
