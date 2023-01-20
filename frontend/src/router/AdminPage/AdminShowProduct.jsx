import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/AdminComponents/AdminNavbar/Navbar";
import AdminGetProduct from "../../components/AdminComponents/AdminProduct/AdminGetProduct";

const AdminShowProduct = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <AdminGetProduct />
        </Container>
      </Box>
    </div>
  );
};

export default AdminShowProduct;
