function Functionals({ handleEvaluate, handleDel, handleReset }) {
  return (
    <>
      <button className="btn btn--functional btn--del" onClick={handleDel}>
        Del
      </button>
      <button className="btn btn--functional btn--reset" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn--equals" onClick={handleEvaluate}>
        =
      </button>
    </>
  );
}

export default Functionals;
