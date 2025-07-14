"use client"
import Accordion from "@/app/accordion/Accordion";
import AccordianProvider from "../context/accordionContext";


export default function Page() {
  return (
    <div>
      Accordion page
      <AccordianProvider>
        <Accordion />
      </AccordianProvider>
    </div>
  );
}
