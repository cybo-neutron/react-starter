import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

function IceCreamView() {
  const numIceCream = useSelector((state) => state.iceCream.numIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream - {numIceCream}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order icecream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(3));
        }}
      >
        Restock icecream
      </button>
    </div>
  );
}

export default IceCreamView;
