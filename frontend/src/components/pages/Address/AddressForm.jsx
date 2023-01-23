import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
  import { useState } from "react";
  import Styles from "./AddressForm.module.css";
  

  
  export default function AddressForm({ onClick,input,setInput }) {
    // const [input, setInput] = useState(initialAddForm);
    const [isError, setError] = useState({
      name: false,
      mob: false,
      add: false,
      pin: false,
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
    };
    const handleError = () => {
      let Error = input.name === ''
      setError({
        ...isError,
        name: input.name === "",
        mob: input.mob === "",
        add: input.add === "",
          pin: input.pin === "" || input.pin.length<6
      });
      if (!Error) {
        CloseBox()
      }
    };
    
  const CloseBox = () => {
          if (
            !isError.name &&
            !isError.mob &&
            !isError.add &&
            !isError.pin 
          ) {
              //Send Post request for add new address
              onClick(false);
          }
          
      }
    // const isError
    return (
      <Box className={Styles.addform}>
            <Box display={{ lg: "flex", md: "block", base:"block"}} gap={10}>
          <FormControl isRequired isInvalid={isError.name}>
            <FormLabel>Name</FormLabel>
            <Input value={input.name} placeholder="Name" onChange={handleInputChange} name="name" />
            {isError.name && (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={isError.mob}>
            <FormLabel>Mobile No.</FormLabel>
            <Input
              name="mob"
              maxlength="10"
              onChange={handleInputChange}
              value={input.mob} placeholder="Enter 10 digit no."
            />
            {isError.mob && (
              <FormErrorMessage>Mobile No. is required.</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired isInvalid={isError.add}>
            <FormLabel>Address(Area & Streat)</FormLabel>
            {/* <Input name="" value={input.name} placeholder='Type Your Address' height="8vh" /> */}
            <Textarea
              name="add"
              onChange={handleInputChange}
              value={input.add} placeholder="Type Your Address"
            ></Textarea>
            {isError.add && (
              <FormErrorMessage>Address is required.</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box display="flex" gap={10}>
          <FormControl>
            <FormLabel>Landmark</FormLabel>
            <Input
              name="landmark"
              onChange={handleInputChange}
              value={input.landmark} placeholder="Enter Landmark"
            />
          </FormControl>
          <FormControl isRequired isInvalid={isError.pin}>
            <FormLabel>Pincode</FormLabel>
            <Input
              name="pin"
              onChange={handleInputChange}
              value={input.pin} placeholder="Enter Pincode"
                        maxlength="6"
                        minLength="6"
            />
            {isError.pin && (
              <FormErrorMessage>Pincode is required.</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box display="flex" gap={10}>
        </Box>
        <Button
          type="submit"
          colorScheme="white"
          bg="rgb(0, 181, 181)"
          w="30%"
          onClick={handleError}
        >
          Save
        </Button>
      </Box>
    );
  }