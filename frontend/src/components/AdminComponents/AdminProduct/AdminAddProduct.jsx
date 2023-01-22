import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../redux/AdminAddProduct/adminaddProduct.action";

const AdminAddProduct = () => {
  const [product, setProduct] = useState({});
  const { productData, msg } = useSelector((store) => store.adminAddProduct);
  console.log(msg);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    toast({
      title: msg,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  console.log(productData);
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Add Product
      </Heading>
      <Flex justify={"center"} width={"100%"} bg={"whiteAlpha.800"} mt={"15"}>
        <form
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "30px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  onChange={hanldeChange}
                  placeholder={"Title"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="text"
                  name="price"
                  onChange={hanldeChange}
                  placeholder={"Product Price"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>First Image</FormLabel>
                <Input
                  type="text"
                  name="img1"
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Second Image</FormLabel>
                <Input
                  type="text"
                  name="img2"
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Main-Category</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="maincategory"
                >
                  <option value="new arrivals">new arrivals</option>
                  <option value="sale">sale</option>
                </Select>
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Sub-Category</FormLabel>
                <Select onChange={hanldeChange} name="category" category>
                  {product.maincategory === "new arrivals" && (
                    <option value="bag">bag</option>
                  )}
                  {product.maincategory === "new arrivals" && (
                    <option value="desks">desks</option>
                  )}
                  {product.maincategory === "sale" && (
                    <option value="messengerbag">messengerbag</option>
                  )}
                  {product.maincategory === "sale" && (
                    <option option value="wallet">
                      wallet
                    </option>
                  )}
                  {product.maincategory === "new arrivals" && (
                    <option value="watch">watch</option>
                  )}
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Price Strike</FormLabel>
                <Input
                  type="text"
                  name="strike"
                  onChange={hanldeChange}
                  placeholder={"Discount "}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Add Stocks</FormLabel>
                <Input
                  type="text"
                  name="stocks"
                  onChange={hanldeChange}
                  placeholder={"Stocks"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={10}
            pt={8}
            display={"flex"}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "center", lg: "flex-end" }}
          >
            <Button
              width={{ base: "50%", sm: "50%", lg: "15%" }}
              size={"md"}
              bg={"green.700"}
              color={"white"}
              _hover={{
                bg: "#02B862",
              }}
              type={"submit"}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Flex>
    </div>
  );
};

export default AdminAddProduct;
