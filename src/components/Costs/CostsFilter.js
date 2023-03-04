// import { useState } from "react";
import { useEffect, useState } from "react";
import "./CostsFilter.scss";
import { motion } from "framer-motion";
const diagramAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom = 1) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.05, type: "ease", duration: 0.1 },
  }),
};
function CostsFilter(props) {
  //props.children
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

  const [maxPrice, setMaxPrice] = useState(1000);
  const date = new Date();

  const years = [
    date.getFullYear() - 2,
    date.getFullYear() - 1,
    date.getFullYear(),
  ];
  years.reverse();
  useEffect(() => {
    setMaxPrice(JSON.parse(localStorage.getItem("maxPrice") ?? "1000"));
  }, []);
  const maxPriceChange = function (event) {
    setMaxPrice(event.target.value);
    localStorage.setItem("maxPrice", JSON.stringify(event.target.value));
  };
  const yearChange = function (event) {
    const year = event.target.value;
    props.setCurrentMonth("12");
    props.setSelectedYear(year);

    // console.log(event.target.value);
  };
  const monthsChange = function (month) {
    if (props.currentMonth === month.toString()) {
      props.setCurrentMonth("12");
    } else {
      props.setCurrentMonth(month.toString());
      props.moveToCosts();
    }
  };
  // console.log(years);
  return (
    <div className="costs-filter">
      <div className="costs-filter__heder">
        <div className="costs-filter__title">
          Selection by year. Regarding $
          <input
            onChange={maxPriceChange}
            value={maxPrice}
            type="number"
            min="100"
            name=""
            id=""
          />
        </div>
        <select
          onChange={yearChange}
          className="costs-filter__select"
          name=""
          id=""
          value={props.selectedYear}
        >
          {years.map((it, id) => {
            return (
              <option key={id} value={it}>
                {it}
              </option>
            );
          })}
        </select>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="costs-filter__expenses"
      >
        {months.map((month, numberMonth) => {
          // costsYear
          const costsMonth = props.costsYear.filter((cost) => {
            return new Date(cost.date).getMonth() === numberMonth;
          });

          const price = costsMonth?.reduce((r, i) => {
            return r + Number(i.price);
          }, 0);
          const procent = (price / maxPrice) * 100;
          return (
            <motion.div
              custom={numberMonth}
              variants={diagramAnimation}
              key={numberMonth}
              onClick={monthsChange.bind(this, numberMonth)}
              className={`costs-filter__item ${
                props.currentMonth === numberMonth.toString()
                  ? "costs-filter__item-current"
                  : ""
              }`}
            >
              <div className="costs-filter__diagram">
                <div
                  style={{ height: procent + "%" }}
                  className="costs-filter__diagram-after"
                ></div>
              </div>
              <div className="costs-filter__month">{month.slice(0, 3)}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default CostsFilter;
