function Numbers() {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <button className={`btn btn--number btn--${i}`} key={i}>
          {i}
        </button>
      ))}
    </>
  );
}

export default Numbers;
