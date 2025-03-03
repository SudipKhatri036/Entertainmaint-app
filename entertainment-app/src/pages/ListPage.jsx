import React from "react";
import { useSearchParams } from "react-router-dom";

function ListPage() {
  let [searchParams] = useSearchParams();

  return (
    <div className="grid lg:grid-cols-3 mt-8">
      <h1 className="text-xl lg:text-3xl">{searchParams.get("name")}</h1>
    </div>
  );
}

export default ListPage;
