"use client";

import { createContext, useReducer } from "react";

export const CounterContext = createContext({});

const initialState =  { count: 0 };

function counterReducer(state, action) {
  switch(action.type) {
        case "increment" : 
        return { count: state.count + 1}
        case "decrement" : 
        return { count: state.count - 1}
        default:
      return state;
    }
}

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider
      value={{
         state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
