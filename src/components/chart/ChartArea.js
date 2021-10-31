import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "./barchart";
import LineChart from "./linechart";

const ChartArea = () => {
  const [linedata, setLinedata] = useState(null);
  const [bardata, setBardata] = useState(null);
  // let lineLength = 0;
  const fetchData = async () => {
    try {
      await axios.get("/api/chart").then((res) => {
        setLinedata(res.data["line_values"]);
        setBardata(res.data["bar_values"]);
      });
    } catch (e) {
      console.log("error : ", e);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setLinedata(null);
      setBardata(null);
    };
  }, []);
  return (
    <div className="chart-area">
      <LineChart linedata={linedata} />
      <BarChart bardata={bardata} />
    </div>
  );
};

export default ChartArea;
