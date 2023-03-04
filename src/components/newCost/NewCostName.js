import { useState } from "react";
import { useEffect } from "react";
function NewCostName(props) {
  //props.children

  const [labelName, setLabelName] = useState("Name");
  const nameChangeHandler = function (event) {
    const el = event.target;

    if (el.value.length < 2) {
      setLabelName("Name is too small");
    }
    if (el.value.length > 9) {
      setLabelName("Name is too big");
    }
    if (el.value.length < 2 || el.value.length > 9) {
      el.style.boxShadow = "rgba(255, 0, 0, 0.66) 0px 0px 10px 5px";
      props.onChange("");

      // props.onChange("");
    } else {
      el.style.boxShadow = "rgba(30, 255, 0, 0.66) 0px 0px 10px 5px";
      setLabelName("Name");

      props.onChange(event.target.value);
    }

    // console.log(event.target.value);
  };
  useEffect(() => {
    // eslint-disable-line
    props.html.name.current.focus();
  }, []);

  return (
    <div className="new-cost__name">
      <label htmlFor="cost-name">{labelName}</label>
      <input
        type="text"
        name="cost-name"
        onChange={nameChangeHandler}
        id="cost-name"
        ref={props.html.name}
      />
    </div>
  );
}

export default NewCostName;
