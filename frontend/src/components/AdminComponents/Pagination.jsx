import { Button, HStack } from "@chakra-ui/react";
import React from "react";
function CreateArrayOfSize(n) {
  return new Array(n).fill(0);
}
const Pagination = ({
  totalPage,
  currentPage,
  handlePageChange,
  // handlePageChangeIncrs,
}) => {
  let page = CreateArrayOfSize(totalPage).map((a, i) => {
    return (
      <Button
        _hover={{
          bg: "#02B862",
        }}
        bg={"green.600"}
        color={"white"}
        key={i + 1}
        disable={currentPage == i}
        onClick={() => handlePageChange(i + 1)}
        variant="outline"
      >
        {i + 1}
      </Button>
    );
  });

  return (
    <div>
      <div>{page}</div>
    </div>
  );
};

export default Pagination;
