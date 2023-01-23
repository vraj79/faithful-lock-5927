import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { OrderSummary } from "../Cart/OrderSummary";
import AddressForm from "./AddressForm";
import Already from "./Already";
// name, add, landmark, pin, mob
const initialAddForm = {
  name: "Nitesh",
  mob: 7988376352,
  add: "H.No.848, Street 11, Landmark RAM NAGAR NARWANA, District JIND",
  pin: "126116",
};
export default function Address() {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(true);
  const [input, setInput] = useState(initialAddForm);
  const [price, setPrice] = useState(0);
  const [striker, setStriker] = useState(0);
  const [qua, setQua] = useState(1);

  const data = JSON.parse(localStorage.getItem("cart")) || [];
  const checkPrice = () => {
    let pr = data.reduce((p, elem) => p + Number(elem.price), 0);
    setPrice(pr);
    let st = data.reduce((p, elem) => p + Number(elem.strike), 0);
    setStriker(st-pr);
    
  };
  useEffect(() => {
    checkPrice();
  }, [qua]);
  return (
    <Box
      display={{ lg: "flex", md: "flex", base: "block" }}
      w={{ lg: "90%", md: "90%", base: "100%" }}
      m="auto"
      mb="5vh"
      justifyContent="space-between"
    >
      <Box
        w={{ lg: "55%", md: "50%", base: "100%" }}
        mt="4vh"
        h="fit-content"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        borderRadius="10px"
        p={{ lg: "3vh", md: "3vh 2vh", base: "3vh" }}
      >
        {show ? (
          <AddressForm onClick={(e) => setShow(e)} input={input} setInput={setInput} />
        ) : (
          <Already
            onClick={(e) => {
              setShow(e);
              setCheck(e);
              }}
              data={input}
              show={show}
          />
        )}
      </Box>
      <Box w={{ lg: "35%", md: "45%", base: "100%" }}>
        <OrderSummary show={check} price={price} discount={striker} total={data.length }/>
      </Box>
    </Box>
  );
}
