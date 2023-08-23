import "./assets/scss/App.scss";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Screen from "./components/Screen";
import Panel from "./components/Panel";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Functionals from "./components/Functionals";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [operation, setOperation] = useState("");
  const [theme, setTheme] = useState("default");

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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <div className="app">
          <main className="container">
            <Header>
              <Logo />
              <ThemeSwitch onTheme={setTheme} />
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
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
