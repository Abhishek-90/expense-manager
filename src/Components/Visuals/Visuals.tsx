import * as S from "./Visuals.styled";
import { GET } from "../../Shared/constants/Status";
import { useEffect } from "react";
import * as R from "../../Shared/Variables/routes";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "../../store/chartDataSlice";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Legend);

function Visuals() {
  const dispatch = useDispatch();
  const chartData = useSelector((state: any) => state.chartData);
  const data = {
    labels: [
      "Food",
      "Clothing",
      "Luxury",
      "Entertainment",
      "Travel",
      "Medical",
      "Investments",
    ],
    datasets: [
      {
        label: "Expense Distribution",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(12, 15, 200, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(12, 15, 200, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    fetch(R.GETVISUALDATA, {
      method: GET,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    }).then((response) => {
      response.json().then((json) => {
        console.log(json.data);
        dispatch(getChartData(json.data));
      });
    });
  }, []);

  return (
    <S.Container>
      {/* <h2>Visuals Page will be available soon.</h2> */}
      <Pie data={data} updateMode="none" width="300px" height="300px" />
    </S.Container>
  );
}

export default Visuals;
