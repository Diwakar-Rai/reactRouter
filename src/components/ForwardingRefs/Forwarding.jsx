import React from "react";

const Forwarding = (props, ref) => {
  return <input {...props} ref={ref} />;
};

export default React.forwardRef(Forwarding);
