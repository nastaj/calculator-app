function Operators({ handleAddOperator }) {
  return (
    <>
      <button
        className="btn btn--number btn--plus"
        onClick={() => handleAddOperator("+")}
      >
        +
      </button>
      <button
        className="btn btn--number btn--minus"
        onClick={() => handleAddOperator("-")}
      >
        -
      </button>
      <button
        className="btn btn--number btn--multiply"
        onClick={() => handleAddOperator("*")}
      >
        x
      </button>
      <button
        className="btn btn--number btn--divide"
        onClick={() => handleAddOperator("/")}
      >
        /
      </button>
      <button
        className="btn btn--number btn--dot"
        onClick={() => handleAddOperator(".")}
      >
        .
      </button>
    </>
  );
}

export default Operators;
