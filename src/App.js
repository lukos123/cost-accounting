// import logo from './logo.svg';
// import './App.css';
// import CostItem from "./components/costItem";
import Costs from "./components/Costs/Costs";
import "./App.css";
import NewCost from "./components/newCost/NewCost";
import { useState } from "react";
import { useEffect } from "react";
// import CostItem from "./components/costItem";
function App() {
  const [costs, setCosts] = useState([]);
  useEffect(() => {
    // console.log(localStorage.getItem("costs"));
    const costsFirst = JSON.parse(localStorage.getItem("costs") ?? "[]");
    setCosts(costsFirst);
  }, []);
  const costsChange = function (cost) {
    setCosts((preventState) => {
      localStorage.setItem("costs", JSON.stringify([cost, ...preventState]));
      return [cost, ...preventState];
    });
  };
  const costDelete = function (id) {
    setCosts((preventState) => {
      const costsFilter = preventState.filter((cost) => cost.id !== id);
      localStorage.setItem("costs", JSON.stringify(costsFilter));

      return costsFilter;
    });
  };

  return (
    <div className="container">
      <NewCost onAdd={costsChange}></NewCost>
      <Costs costs={costs} costDelete={costDelete} />
    </div>
  );
}

export default App;
