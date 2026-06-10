"use client";
import { productList } from "@/redux/slice/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect((item) => {
    dispatch(productList());
  }, [dispatch]);

  console.log(data, "kk");

  return (
    <>
    {data.map((item)=>(
      <li key={item.id}>{item.title}</li>
    ))}
    </>
  );
}
