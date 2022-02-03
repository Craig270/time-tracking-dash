import React, { useState } from "react";
import "./header.scss";
import axios from "axios";

export default function Header() {
  const [apiData, setApiData] = React.useState([]);
  const api = axios.create({
    baseURL: "https://api.randomuser.me/",
  });
  api.get("/").then((res) => {
    console.log(res.data);
  });
  return (
    <div>
      <h1 className="love"> I like to build thin!!!gs</h1>
    </div>
  );
}
