import "./assets/scss/App.scss";
import Header from "./components/Header";
import Logo from "./components/Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Screen from "./components/Screen";
import Panel from "./components/Panel";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import Functionals from "./components/Functionals";

function App() {
  return (
    <main className="container">
      <Header>
        <Logo />
        <ThemeSwitch />
      </Header>

      <Screen />

      <Panel>
        <Numbers />
        <Operators />
        <Functionals />
      </Panel>
    </main>
  );
}

export default App;
