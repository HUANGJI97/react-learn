import "./styles.css";
import SlotTest from "./slotTest";
import Clock from "./Clock";

export default function App() {
  return (
    <div className="App">
      <Clock />
      <SlotTest>
        <h1>柠檬水露</h1>
      </SlotTest>
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
