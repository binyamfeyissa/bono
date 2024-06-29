import React, { useEffect } from "react";
import * as echarts from "echarts";

function MostSelledChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#budgetChart")).setOption({
      legend: {
        data: ["Tibs", "Kitfo"],
      },
      radar: {
        shape: "circle",
        indicator: [
          {
            name: "Monday",
            max: 6500,
          },
          {
            name: "Tusday",
            max: 16000,
          },
          {
            name: "Wednesday",
            max: 30000,
          },
          {
            name: "Thursday",
            max: 38000,
          },
          {
            name: "Friday",
            max: 52000,
          },
          {
            name: "Saturday",
            max: 25000,
          },
        ],
      },
      series: [
        {
          name: "Tibs vs Kitfo",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Tibs",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Kitfo",
            },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px" }}
      className="echarts"
    ></div>
  );
}

export default MostSelledChart;
