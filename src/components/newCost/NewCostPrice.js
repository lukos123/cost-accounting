// import { useState } from "react";

function NewCostPrice(props) {
  //props.children

  // const [price, setPrice] = useState("");
  const labelPrice = "Price";
  const priceChangeHandler = function (event) {
    const el = event.target;

    if (el.value !== "") {
      props.onChange(event.target.value);
      el.style.boxShadow = "rgba(30, 255, 0, 0.66) 0px 0px 10px 5px";
    } else {
      props.onChange("");
      el.style.boxShadow = "rgba(255, 0, 0, 0.66) 0px 0px 10px 5px";
    }
    // console.log(event.target.value);
  };
  return (
    <div className="new-cost__price">
      <label htmlFor="cost-price">{labelPrice}</label>
      <input
        type="number"
        onChange={priceChangeHandler}
        min="0.01"
        step="0.01"
        name="cost-price"
        id="cost-price"
        ref={props.html.price}
      />
    </div>
  );
}

export default NewCostPrice;
