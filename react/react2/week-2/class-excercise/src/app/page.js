"use client";
import Counter from "./reducer/counter";
import CounterProvider from "./reducer/CounterContext";

export default function Home() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
