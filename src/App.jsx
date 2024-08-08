// import { useState } from "react";
import "./App.css";
import Topbar from "./components/layout/Topbar";
import Hero from "./components/home/Hero";
import CategoryList from "./components/home/CategoryList";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <CategoryList />
    </>
  );
}

export default App;
