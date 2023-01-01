import * as S from "./Visuals.styled";
import { GET } from "../../Shared/constants/Status";
import { useEffect } from "react";
import * as R from "../../Shared/Variables/routes";
import { useDispatch } from "react-redux";
import { getChartData } from "../../store/chartDataSlice";

function Visuals() {
  const dispatch = useDispatch();

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
        dispatch(getChartData(json.data));
      });
    });
  }, []);

  return (
    <S.Container>
      <h2>Visuals Page will be available soon.</h2>
    </S.Container>
  );
}

export default Visuals;
