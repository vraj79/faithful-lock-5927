import { Button, HStack } from "@chakra-ui/react";
import React from "react";
function CreateArrayOfSize(n) {
  return new Array(n).fill(0);
}
const Pagination = ({
  totalPage,
  currentPage,
  handlePageChange,
  handlePageChangeIncrs,
}) => {
  let page = CreateArrayOfSize(totalPage).map((a, i) => {
    return (
      <Button
        key={i + 1}
        disable={currentPage === i + 1}
        onClick={() => handlePageChange(i + 1)}
        variant="outline"
      >
        {i + 1}
      </Button>
    );
  });

  return (
    <div>
      <HStack justify={"space-between"} paddingBottom={"30px"}>
        <div>{page}</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Button
            width={"8rem"}
            disabled={currentPage === 1}
            onClick={() => handlePageChangeIncrs(currentPage - 1)}
          >
            Prev
          </Button>
          <Button
            width={"8rem"}
            disabled={currentPage === totalPage}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </HStack>
    </div>
  );
};

export default Pagination;
