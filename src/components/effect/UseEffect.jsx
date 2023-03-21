import React, { useState, useEffect } from "react";

const UseEffect = () => {
  let [count, setCount] = useState(0);

  //! It is behaving like render method in class based component
  // useEffect(() => {
  //     console.log("I am useEffect, check how many times do i render")
  // })

  //* It is behaving like componentDidMount in class based component
  // useEffect(() => {
  //     console.log("I am useEffect, check how many times do i render")
  // }, [])
  //! The empty array above in the useEffect is called dependency list and it is optional

  //TODO: It is behaving like ComponentDidUpdate in class based component
  useEffect(() => {
    document.title = `clicked ${count} times`;
    console.log("I am useEffect and I am behaving like componentDidUpdate");
  }, [count]);
  //! The dependency list can be used to give the dependent element which needs to be updated

  let Increment = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default UseEffect;
