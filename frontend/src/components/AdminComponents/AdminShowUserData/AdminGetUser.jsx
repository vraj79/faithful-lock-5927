import {
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../redux/AdminShowUser/AdminShowUser.action";
import AdminShowUserCard from "./AdminShowUserCard";

const AdminGetUser = () => {
  const { adminAlluser } = useSelector((store) => store.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <div>
      <Heading textAlign={"center"}>Users</Heading>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"}>
            <Tr>
              <Th>id</Th>
              <Th>first_name</Th>
              <Th>last_name</Th>
              <Th>email</Th>
              <Th>wishlist</Th>
              <Th>cartitem</Th>
              <Th>delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {adminAlluser.map((item) => (
              <AdminShowUserCard
                key={item._id}
                id={item._id}
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                wishlist={item.wishlist.length}
                cartitem={item.cartitem.length}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminGetUser;
