// import { useState } from "react";
import "./App.css";
import Topbar from "./components/layout/Topbar";
import Hero from "./components/home/Hero";
import CategoryCard from "./components/home/CategoryCard";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <CategoryCard />
    </>
  );
}

export default App;
