import React from "react";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
export default function Menu({ data }) {
  const dispatch = useDispatch();
  const { bugers, total } = useSelector((state) => state.buger);
  const giamMon = () => {
    const action = {
      type: "GIAM_MON",
      payload: {
        tenMon: data.tenMon,
      },
    };
    dispatch(action);
  };
  const themMon = () => {
    const action = {
      type: "THEM_MON",
      payload: {
        tenMon: data.tenMon,
      },
    };
    dispatch(action);
  };
  return (
    <div className="d-flex justify-content-between">
      <div> {data.tenMon}</div>
      <div> </div>
      <div>
        <Button color="success" onClick={themMon}>
          +
        </Button>
        <Button
          color="danger"
          onClick={giamMon}
          disabled={total == 30}
          key={bugers.tenMon}
        >
          -
        </Button>
      </div>
      <div> {data.gia} </div>
    </div>
  );
}
