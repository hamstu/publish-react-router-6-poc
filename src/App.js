import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<div>Default home</div>} />
      </Route>
    </Routes>
  );
}
