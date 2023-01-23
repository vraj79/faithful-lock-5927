import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/AdminComponents/AdminNavbar/Navbar";
import AdminAddProduct from "../../components/AdminComponents/AdminProduct/AdminAddProduct";

function AdminAddPoductPage() {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
        >
          <AdminAddProduct />
        </Container>
      </Box>
    </div>
  );
}

export default AdminAddPoductPage;
