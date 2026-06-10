"use client";

import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Table() {
  const [rowData, setRowData] = useState();

  let table = [
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      address: "Malda",
      customar_Name: "Nill",
      feedback: "good",
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      address: "Jalpaiguri",
      customar_Name: "Raj",
      feedback: "good",
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      address: "NJP",
      customar_Name: "Rupam",
      feedback: "good",
    },
  ];
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "address" },
    { field: "customar_Name" },
    { field: "feedback" },
  ]);

  useEffect(
    (item) => {
      setTimeout(() => {
        setRowData(table);
      }, 1000);
    },
    [rowData]
  );
  return (
    <>
      {rowData ? (
        <div style={{ height: 500 }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      ) : (
        <SkeletonTheme baseColor="#D0D0D0" highlightColor="#444">
          <p>
            <Skeleton count={4} height={30} />
          </p>
        </SkeletonTheme>
      )}
    </>
  );
}