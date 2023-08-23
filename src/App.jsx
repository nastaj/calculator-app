import "./assets/scss/App.scss";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Screen from "./components/Screen";
import Panel from "./components/Panel";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Functionals from "./components/Functionals";
import { useState } from "react";

function App() {
  const [operation, setOperation] = useState("");

  function handleOperation(value) {
    setOperation((operation) => operation.concat(String(value)));
  }

  function handleAddOperator(operator) {
    setOperation((operation) => operation.concat(operator));
  }

  function handleEvaluate() {
    if (!operation) return;

    const result = eval(operation);
    setOperation(String(result));
  }

  function handleDel() {
    setOperation((operation) => operation.slice(0, -1));
  }

  function handleReset() {
    setOperation("");
  }

  return (
    <main className="container">
      <Header>
        <Logo />
        <ThemeSwitch />
      </Header>

      <Screen operation={operation} />

      <Panel>
        <Numbers handleOperation={handleOperation} />
        <Operators handleAddOperator={handleAddOperator} />
        <Functionals
          handleEvaluate={handleEvaluate}
          handleDel={handleDel}
          handleReset={handleReset}
        />
      </Panel>
    </main>
  );
}

export default App;
