"use client";

import { createContext, useState } from "react";

export const AccordianContext = createContext({});

export default function AccordianProvider({children}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AccordianContext.Provider value={{ activeIndex, setActiveIndex}}>
      {children}
    </AccordianContext.Provider>
  );
}
