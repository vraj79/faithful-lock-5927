import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical, BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const AdminProductShowCard = ({ id, img, title, price, stocks }) => {
  return (
    <Tr
      _hover={{
        bg: "gray.100",
      }}
      textAlign={"center"}
    >
      <Td>{id}</Td>
      <Td width={"10%"}>
        <Image src={img} width={"100%"} />
      </Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>{stocks}</Td>
      <Td>{<BsPencilFill />}</Td>
      <Td color={"red"}>{<MdDelete />}</Td>
    </Tr>
  );
};

export default AdminProductShowCard;
