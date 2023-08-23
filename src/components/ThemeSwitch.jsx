import "../assets/scss/ThemeSwitch.scss";

function ThemeSwitch({ onTheme }) {
  return (
    <div className="theme-switch">
      <p>Theme</p>
      <span className="theme-switch__desc theme-switch__desc--1">1</span>
      <span className="theme-switch__desc theme-switch__desc--2">2</span>
      <span className="theme-switch__desc theme-switch__desc--3">3</span>

      <div className="theme-switch__wrapper">
        <input
          type="radio"
          name="theme"
          id="1"
          className="theme-1"
          onChange={() => onTheme("default")}
        />
        <label className="label-1" htmlFor="1"></label>

        <input
          type="radio"
          name="theme"
          id="2"
          className="theme-2"
          onChange={() => onTheme("light")}
        />
        <label className="label-2" htmlFor="2"></label>

        <input
          type="radio"
          name="theme"
          id="3"
          className="theme-3"
          onChange={() => onTheme("dark")}
        />
        <label className="label-3" htmlFor="3"></label>
        <div className="theme-switch__switch"></div>
      </div>
    </div>
  );
}

export default ThemeSwitch;
