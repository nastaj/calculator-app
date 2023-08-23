import "../assets/scss/Screen.scss";

function Screen({ operation }) {
  return (
    <div className="screen">
      <span className="screen__operations">{operation}</span>
    </div>
  );
}

export default Screen;
