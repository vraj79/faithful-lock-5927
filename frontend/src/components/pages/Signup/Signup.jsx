import {
  Stack,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Image,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const [signup, SetSignup] = useState({});
  const navigate = useNavigate();
  const toast = useToast();
  const [set, setset] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    SetSignup({
      ...signup,
      [name]: value,
    });
  };

  const Handlesubmit = (e) => {
    e.preventDefault();

    fetch("https://dailybackend.onrender.com/user/register", {
      method: "POST",
      body: JSON.stringify(signup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "User Register Successfully") {
          toast({
            title: "Registration Successful",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
          navigate("/login");
        } else {
          toast({
            title: "User already exist . Please Login",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setset(!set);
  }, [Handlesubmit]);
  return (
    <>
      <div>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          //   bg={useColorModeValue('gray.50', 'gray.800')}
          bg="#11364E"
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"xl"}
            // bg={useColorModeValue('white', 'gray.700')}
            rounded={"xl"}
            boxShadow={"lg"}
            bg="white"
            p={5}
            my={12}
            alignItems={"center"}
          >
            <Image
              src={
                "https://drive.google.com/uc?export=view&id=1Au2Q9AJ9LQwCZ4VIzPk52z5ZroOkNBfh"
              }
              width={"30%"}
            />
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Register
            </Heading>
            <form style={{ width: "100%" }} onSubmit={Handlesubmit}>
              {/* first Name */}
              <FormControl id="email" isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>First Name</FormLabel>
                <Input
                  placeholder="First_Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="first_name"
                  onChange={handlechange}
                />
              </FormControl>

              {/* Last Name */}
              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Last Name</FormLabel>
                <Input
                  placeholder="Last_Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="last_name"
                  onChange={handlechange}
                />
              </FormControl>

              {/* //Email */}
              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Email address</FormLabel>
                <Input
                  placeholder="your-email@dailysope.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email"
                  onChange={handlechange}
                />
              </FormControl>

              {/* password */}
              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handlechange}
                />
              </FormControl>

              {/* //Mobile Number */}

              {/* first Name */}
              <FormControl isRequired pb={"20px"}>
                <FormLabel fontSize={"18px"}>Mobile Number</FormLabel>
                <Input
                  placeholder="123456789"
                  _placeholder={{ color: "gray.500" }}
                  type="Number"
                  name="mobile"
                  onChange={handlechange}
                />
              </FormControl>

              <Stack spacing={6} alignItems={"center"}>
                <Button
                  width={"200px"}
                  bg={"green.700"}
                  color={"white"}
                  _hover={{
                    bg: "green.600",
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </form>
            <Stack spacing={6} alignItems={"flex-end"}>
              <Link to="/login">
                <Button
                  width={"200px"}
                  bg={"green.700"}
                  color={"white"}
                  _hover={{
                    bg: "green.600",
                  }}
                >
                  Click to go Login Page
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </div>
    </>
  );
};

export default Signup;
