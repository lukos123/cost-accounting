import "./NewCost.scss";

import { useState } from "react";
import NewCostName from "./NewCostName";
import NewCostPrice from "./NewCostPrice";
import NewCostDate from "./NewCostDate";
import { useRef } from "react";
// import { useEffect } from "react";
import { motion } from "framer-motion";
const blockAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom = 1) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.05, type: "ease", duration: 0.1 },
  }),
};
// import { createPortal } from "react-dom";
function NewCost(props) {
  //props.children

  const [cost, setCost] = useState({
    name: "",
    price: "",
    date: "",
  });

  const costElements = {
    name: useRef(),
    price: useRef(),
    date: useRef(),
  };

  // const [difg, setDifg] = useState()

  const [newCostState, setNewCostState] = useState(false);
  const newCostStateChangeHandler = function (state) {
    setNewCostState(state);
  };

  const nameChange = function (name) {
    setCost((prevState) => {
      // console.log(prevState);
      return {
        ...prevState,
        name: name,
      };
    });
  };
  const priceChange = function (name) {
    setCost((prevState) => {
      // console.log(prevState);
      return {
        ...prevState,
        price: name,
      };
    });
  };
  const dateChange = function (name) {
    setCost((prevState) => {
      // console.log(prevState);
      return {
        ...prevState,
        date: name,
      };
    });
  };
  const submit = function (event) {
    event.preventDefault();
    // console.log();
    // console.log(costElements);
    if (cost.date !== "" && cost.name !== "" && cost.price !== "") {
      cost.id = `${cost.name}${cost.price}${cost.date}${Math.random()}`;
      props.onAdd(cost);
      costElements.name.current.value = "";
      costElements.date.current.value = "";
      costElements.price.current.value = "";
      costElements.name.current.style.boxShadow = "";
      costElements.date.current.style.boxShadow = "";
      costElements.price.current.style.boxShadow = "";
      setCost({
        name: "",
        price: "",
        date: "",
        id: Number,
      });
      setNewCostState(false);
    }

    // onAdd
  };

  if (!newCostState) {
    return (
      <motion.div
        key="buttonnewcost"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="new-cost__off"
      >
        <motion.button
          custom={1}
          variants={blockAnimation}
          onClick={newCostStateChangeHandler.bind(this, true)}
          type="button"
        >
          ADD NEW EXPENSE
        </motion.button>
      </motion.div>
    );
  }
  return (
    <motion.div
      key="formnewcost"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="new-cost"
    >
      <motion.form custom={1} variants={blockAnimation} onSubmit={submit}>
        <NewCostName html={costElements} onChange={nameChange} />
        <NewCostPrice html={costElements} onChange={priceChange} />
        <NewCostDate html={costElements} onChange={dateChange} />
        <div className="new-cost__action">
          <button type="submit">ADD EXPENSE</button>

          <button onClick={setNewCostState.bind(this, false)}>CLOSE</button>
        </div>
      </motion.form>
    </motion.div>
  );
}

export default NewCost;
