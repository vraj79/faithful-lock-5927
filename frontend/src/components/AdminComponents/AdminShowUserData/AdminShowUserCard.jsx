import { Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { adminDeleteUser } from "../../../redux/AdminShowUser/AdminShowUser.action";

const AdminShowUserCard = ({
  id,
  first_name,
  last_name,
  email,
  wishlist,
  cartitem,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  return (
    <Tr
      textAlign={"center"}
      _hover={{
        bg: "gray.100",
      }}
    >
      <Td>{id}</Td>
      <Td>{first_name}</Td>
      <Td>{last_name}</Td>
      <Td>{email}</Td>
      <Td>{wishlist}</Td>
      <Td>{cartitem}</Td>

      <Td
        color={"red"}
        cursor={"pointer"}
        onClick={() =>
          dispatch(
            adminDeleteUser(id),
            toast({
              title: "delete successfully",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            })
          )
        }
      >
        {<MdDelete />}
      </Td>
    </Tr>
  );
};

export default AdminShowUserCard;
