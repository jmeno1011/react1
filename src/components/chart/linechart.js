import React from "react";
import Chart from "react-google-charts";

const LineChart = ({ linedata }) => {
  console.log("linedata : ", linedata);
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["x", "dogs", "cats"],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19],
      ]}
      options={{
        hAxis: {
          title: "Time",
        },
        vAxis: {
          title: "Popularity",
        },
        series: {
          1: { curveType: "function" },
        },
      }}
    />
  );
};

export default LineChart;
