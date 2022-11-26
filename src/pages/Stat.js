import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

const Stat = () => {
  const dispatch = useDispatch();
  dispatch(increment());
  const counterValue = useSelector((state) => state.counter.value);
  return <div>Counter: {counterValue}. You've increased the counter using this page</div>;
};

export default Stat;
