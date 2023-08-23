function Numbers({ handleOperation }) {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <button
          className={`btn btn--number btn--${i}`}
          key={i}
          onClick={() => handleOperation(i)}
        >
          {i}
        </button>
      ))}
    </>
  );
}

export default Numbers;
