import React from "react";
import Chart from "react-google-charts";

const BarChart = ({ bardata }) => {
  console.log("bardata : ", bardata);
  let data = [["City", "2010 Population", "2000 Population"]];
  // let
  bardata &&
    bardata.map((value) => {
      data.push([
        value["City"],
        value["Population2010"],
        value["Population2000"],
      ]);
    });
  return (
    <div style={{ marginLeft: "10px" }}>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: "Population of Largest U.S. Cities",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Total Population",
            minValue: 0,
          },
          vAxis: {
            title: "City",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default BarChart;
