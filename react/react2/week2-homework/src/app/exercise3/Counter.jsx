"use client";
import React from "react";
import { useCounter } from "./CounterContext";
import { Button } from "@mui/material";

export default function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
    </div>
  );
}
