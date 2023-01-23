import { Box, Container } from "@chakra-ui/react";
import React from "react";
import AdminDashbord from "../../components/AdminComponents/AdminDashboard/AdminDashbord";
import Navbar from "../../components/AdminComponents/AdminNavbar/Navbar";

const AdminDshboardPage = () => {
  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={"gray.100"}>
        <Container
          maxW={"80%"}
          margin={"auto"}
          mr={"25px"}
        >
          <AdminDashbord />
        </Container>
      </Box>
    </div>
  );
};

export default AdminDshboardPage;
