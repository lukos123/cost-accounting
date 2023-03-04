import { useState } from "react";
function NewCostDate(props) {
  //props.children
  // const [date, setDate] = useState("");
  const labelDate = useState("Date")[0];

  const dateChangeHandler = function (event) {
    const el = event.target;

    if (el.value !== "") {
      props.onChange(event.target.value);
      el.style.boxShadow = "rgba(30, 255, 0, 0.66) 0px 0px 10px 5px";
    } else {
      props.onChange("");
      el.style.boxShadow = "rgba(255, 0, 0, 0.66) 0px 0px 10px 5px";
    }
  };
  return (
    <div className="new-cost__date">
      <label htmlFor="cost-date">{labelDate}</label>
      <input
        type="date"
        onChange={dateChangeHandler}
        name="cost-date"
        id="cost-date"
        ref={props.html.date}
      />
    </div>
  );
}

export default NewCostDate;
