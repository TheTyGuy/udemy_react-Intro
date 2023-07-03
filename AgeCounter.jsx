import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  //let age = 30;
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
    //age = age + 1;
    /* or age++ */
    // this age++ doesn't work alone because the age does not re-render, we need to update the State of the variable. (done above with const...)
  }

  return (
    <div>
      <button onClick={increaseAge}>Increase age</button>
      <AgeDisplay age={age} />
    </div>
  );
}
