import "./global.css";
import { Car } from "./Components/Car/Car";
export function App() {
  function hello(value) {
    alert("Hello from <App/>" + value);
  }
  return (
    <div>
      <p>I am the {"<App/>"}</p>
      <Car onCarClick={hello} />
    </div>
  );
}
