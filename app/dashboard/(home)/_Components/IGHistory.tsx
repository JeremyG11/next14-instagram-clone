import React from "react";
import { IGHistoryUsers } from "./IGHistoryUsers";

export function IGHistory() {
  return (
    <section className="w-full flex  items-center ">
      <ul className="flex justify-between items-start space-x-2 overflow-x-scroll stories rounded">
        <IGHistoryUsers />
      </ul>
    </section>
  );
}
