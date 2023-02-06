import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./cakeSlice";

function CakeView() {
  const numCakes = useSelector((state) => state.cake.numCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numCakes}</h2>
      <button
        onClick={() => {
          dispatch(cakeActions.ordered());
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          dispatch(cakeActions.restocked(3));
        }}
      >
        Restock cake
      </button>
    </div>
  );
}

export default CakeView;
