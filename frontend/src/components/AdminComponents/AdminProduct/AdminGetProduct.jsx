import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  adminDeleteProduct,
  adminShowProducts,
} from "../../../redux/AdminShowProduct/adminShowProduct.action";
import Pagination from "../Pagination";
import AdminProductShowCard from "./AdminProductShowCard";
const AdminGetProduct = () => {
  const { adminProduct, product } = useSelector(
    (store) => store.adminShowProduct
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  let total = Math.ceil(product / 10);

  useEffect(() => {
    dispatch(adminShowProducts(page));
    // dispatch(adminDeleteProduct());
  }, [page]);
  return (
    <div>
      <Heading textAlign={"center"}>Product</Heading>
      <Flex justifyContent={"flex-end"}>
        <Button
          variant={"solid"}
          bg={"green.700"}
          color={"white"}
          _hover={{
            bg: "#02B862",
          }}
          mb={"20px"}
          leftIcon={<MdAddCircleOutline />}
        >
          <Link to={"/admin/addProduct"}>Add Product</Link>
        </Button>
      </Flex>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"}>
            <Tr>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th>Product Price</Th>
              <Th>Stocks</Th>
              <Th>Status</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {adminProduct.map((item) => (
              <AdminProductShowCard
                key={item._id}
                id={item._id}
                img={item.img1}
                title={item.title}
                price={item.price}
                stocks={item.stocks}
                page={page}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex align={"center"} justifyContent={"center"} p={"25px"}>
        <Pagination
          totalPage={total}
          handlePageChange={(page) => setPage(page)}
          currentPage={page}
        />
      </Flex>
    </div>
  );
};

export default AdminGetProduct;
