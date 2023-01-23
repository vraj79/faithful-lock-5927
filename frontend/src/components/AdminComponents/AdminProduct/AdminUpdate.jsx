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
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adminUpdateData } from "../../../redux/AdminShowProduct/adminShowProduct.action";
const AdminUpdate = () => {
  const { updatemsg } = useSelector((store) => store.adminShowProduct);
  const toast = useToast();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getdata = async (id) => {
    try {
      const res = await axios(
        `https://dailybackend.onrender.com/products/${id}`
      );
      setProduct(res.data.totalProduct);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getdata(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminUpdateData(id, product));
    toast({
      title: updatemsg,
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
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Update Product
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
              <FormControl>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={hanldeChange}
                  placeholder={"Title"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="text"
                  name="price"
                  value={product.price}
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
              <FormControl>
                <FormLabel>First Image</FormLabel>
                <Input
                  type="text"
                  name="img1"
                  value={product.img1}
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Second Image</FormLabel>
                <Input
                  type="text"
                  name="img2"
                  value={product.img2}
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
              <FormControl>
                <FormLabel>Main-Category</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="maincategory"
                  value={product.maincategory}
                >
                  <option value="new arrivals">new arrivals</option>
                  <option value="sale">sale</option>
                </Select>
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Sub-Category</FormLabel>
                <Select
                  onChange={hanldeChange}
                  name="category"
                  value={product.category}
                >
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
              <FormControl>
                <FormLabel>Price Strike</FormLabel>
                <Input
                  type="text"
                  name="strike"
                  value={product.strike}
                  onChange={hanldeChange}
                  placeholder={"Discount "}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Add Stocks</FormLabel>
                <Input
                  type="text"
                  name="stocks"
                  value={product.stocks}
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

export default AdminUpdate;
