import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import Menu from "./Menu";

export default function FormMenu() {
  const { menu, total, bugers } = useSelector((state) => state.buger);
  return (
    <div className="row">
      <h1>Chọn Thức Ăn</h1>
      <br />
      <div className="w-75">
        <div className="d-flex justify-content-between">
          <p>Thức ăn</p>
          <p>Giá</p>
        </div>
        <hr />
        {menu.map((item) => (
          <div key={item.tenMon}>
            <Menu data={item} />
          </div>
        ))}
        <hr />
        <div className="d-flex justify-content-between">
          <p>Tổng tiền :</p>
          <p>{total} </p>
        </div>
        <div>
          <Button color="primary">Thanh toán</Button>
        </div>
      </div>
    </div>
  );
}
