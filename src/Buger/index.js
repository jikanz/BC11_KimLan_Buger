import React from "react";
import Buger from "./Buger";
import FormMenu from "./FormMenu";

export default function SellBuger() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Bài tập Buger Cybersoft</h1>
      <div className="row">
        <div className="col-sm-8">
          <Buger />
        </div>
        <div className="col-sm-4">
          <FormMenu />
        </div>
      </div>
    </div>
  );
}
