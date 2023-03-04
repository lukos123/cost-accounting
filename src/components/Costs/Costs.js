import CostItem from "./costItem";
import "./Costs.css";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import { useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
const textAnimation = {
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
const blockAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom = 1) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.08, type: "ease", duration: 0.1 },
  }),
};

function Costs(props) {
  const costs = props.costs;

  const date = new Date();

  const [selectedYear, setSelectedYear] = useState(
    date.getFullYear().toString()
  );
  const [currentMonth, setCurrentMonth] = useState("12");

  const costsYear = costs.filter((i) => {
    // console.log(new Date(i.date).getFullYear().toString(), selectedYear);

    return new Date(i.date).getFullYear().toString() === selectedYear;
  });
  const costsMonth = costsYear.filter((i) => {
    // console.log(new Date(i.date).getFullYear().toString(), selectedYear);

    if (currentMonth !== "12") {
      return new Date(i.date).getMonth().toString() === currentMonth;
    }
    return true;
  });
  // const handleChange = (inView) => {
  //   if (inView) {
  //     // Trigger animation here
  //     console.log(inView);
  //   }
  // };
  // const observerArr = [];
  // costsMonth.forEach((element) => {
  //   observerArr.push(
  //     useInView({
  //       threshold: 0.5, // The percentage of the element that needs to be in view before `inView` becomes `true`
  //     })
  //   );
  // });
  const costsBlock = useRef();
  const moveToCosts = function () {
    setTimeout(() => {
      costsBlock.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="costs">
      <CostsFilter
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
        costs={costs}
        costsYear={costsYear}
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        moveToCosts={moveToCosts}
      />
      <div ref={costsBlock}></div>

      {costsMonth.length === 0 ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="costs-massage"
            custom={1}
            variants={textAnimation}
          >
            You have no expenses in this period
          </motion.div>
        </motion.div>
      ) : (
        costsMonth.map((cost, id) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={cost.id}
          >
            <motion.div custom={1} variants={blockAnimation}>
              <CostItem costDelete={props.costDelete} cost={cost} />
            </motion.div>
          </motion.div>
        ))
      )}

      {/* <div className="f">ds</div> */}
      {/* <CostItem name="mopa" />
      <CostItem date={dateISO} name="computer" price="4000" />
      <CostItem name="computer" price="40000" /> */}
    </div>
  );
}

export default Costs;
