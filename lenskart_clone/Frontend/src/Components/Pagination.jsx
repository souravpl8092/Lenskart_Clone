import { Flex } from "@chakra-ui/react";

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
    <Flex
      w={{ md: "15%", base: "5%" }}
      m="2% auto"
      gap="2"
      justifyContent="center"
    >
      {prev}
      {currentPage}
      {next}
    </Flex>
  );
}

export default Pagination;
