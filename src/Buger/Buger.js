import React from "react";
import { useSelector } from "react-redux";
export default function DoAn() {
  // const dispatch = useDispatch();
  const { bugers } = useSelector((state) => state.buger);

  return (
    <div>
      <div className="breadTop"></div>
      <h1>Chọn Thức Ăn </h1>
      {bugers.map((item, index) => {
        let nhanBanh = [];
        for (let i = 0; i < item.soLuong; i++) {
          nhanBanh.push(<div key={index} className={item.tenMon}></div>);
        }
        return nhanBanh;
      })}
      <div className="breadBottom"></div>
    </div>
  );
}
