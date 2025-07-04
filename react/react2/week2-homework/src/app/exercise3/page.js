"use client";

import React from "react";
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

export default function Page() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
