// import { paste } from "@testing-library/user-event/dist/paste";
import "./CostItem.scss";
import Cross from "../UI/cross/Cross";
// import { motion } from "framer-motion";
// import { forwardRef } from "react";
// import React, { useState } from "react";
const CostItem = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.log(props?.date);

  const cost = props?.cost ?? { name: "d", price: "100", date: "2022" };
  // console.log(cost);
  const date = new Date(cost.date ?? 0);

  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  const day = date.getDate();
  const name = cost.name ?? "component";
  // const [name, setName] = useState(cost.name);
  // const [price, setPrice] = useState(cost.price);
  const price = cost.price ?? "2000";

  return (
    <div
      // custom={props.custom}

      className="cost-item"
    >
      <div className="cost-item__date">
        <span className="cost-item__month">{monthName}</span>{" "}
        <span className="cost-item__year">{year}</span>{" "}
        <span className="cost-item__day">{day}</span>
      </div>
      {/* <button onClick={changeData}>pdddd</button>  */}
      <div className="cost-item__data">
        <Cross onClick={props.costDelete.bind(this, cost.id)} />
        <div className="cost-item__price">${price}</div>
        <div className="cost-item__name">{name}</div>
      </div>
    </div>
  );
};
export default CostItem;
