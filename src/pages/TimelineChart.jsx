import React from "react";
import { Chart } from "react-google-charts";

// const columns = [
//   { type: "string", id: "President" },
//   { type: "date", id: "Start" },
//   { type: "date", id: "End" },
// ];

// const rows = [
//   ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
//   ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
//   ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
// ];

const columns = [
  { type: "string", id: "President" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

const rows = [
  ["Washington", new Date(0, 0, 0, 2, 0, 0), new Date(0, 0, 0, 8, 0, 0)],
  ["Adams", new Date(0, 0, 0, 9, 0, 0), new Date(0, 0, 0, 15, 0, 0)],
  ["Jefferson", new Date(0, 0, 0, 16, 0, 0), new Date(0, 0, 0, 22, 0, 0)],
];

export const data = [columns, ...rows];

export default function Timeline() {
  return (
    <Chart
      chartType="Timeline"
      data={data}
      width="100%"
      height="400px"
      options={{
        hAxis: {
          format: "h:mm a",
        },
        tooltip: {
          format: "h:mm a",
        },
        colors: ["#008000", "#008000", "#008000"], // Add this line to change the colors to green
      }}
    />
  );
}
