function Pagination({ current, onChange }) {
  const style = {
    background: "gray",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "10px 18px",
    margin: "auto"
  };
  const prev = (
    <button
      disabled={current === 0}
      onClick={() => onChange(current - 1)}
      style={style}
    >
      PREV
    </button>
  );
  const currentPage = <button style={style}>{current + 1}</button>;

  const next = (
    <button onClick={() => onChange(current + 1)} style={style}>
      NEXT
    </button>
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "5%",
        width: "15%",
        margin: "auto",
        marginTop: "1%",
        padding: "1%",
        fontSize: "15px"
      }}
    >
      {prev}
      {currentPage}
      {next}
    </div>
  );
}

export default Pagination;
