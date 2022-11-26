import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const counterValue = useSelector((state) => state.counter.value);
  return <div>Counter: {counterValue}</div>;
};

export default Main;
