import { Box, Button, Grid, HStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Styles from "./SingleProduct.module.css";

// let data = {
//   img1: "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-393,h-485,dpr-1",
//   title: "All Beige Pedal Daypack",
//   img2: "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-392,h-483,dpr-1",
//   price: 1699,
//   strike: 2999,
//   category: "bag",
//   qunatity: 1,
//   stocks: 0,
// };

export default function SingleProduct() {
  const [data, setData] = useState({});
  const [whit, setWhit] = useState(true);
  const userId = "63ca88159abe15d6b41b96a9";
  const { id } = useParams();
  const ref = useRef(null);
  const Setwhitlist = async () => {
    setWhit(!whit);
    try {
      const res = await axios.post(`http://localhost:8080/wishlist/add/${userId}`, data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getdata = async (id) => {
    try {
      const res = await axios(`http://localhost:8080/products/${id}`);
      setData(res.data.totalProduct);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata(id);
  }, [id]);

  const addtocart = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/cart/add/${userId}`,
        data
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      w="90%"
      display={{ lg: "flex", md: "flex", base: "block" }}
      className={Styles.main}
    >
      <Box>
        <Image src={data.img1} ref={ref} />
        <HStack>
          <Image
            src={data.img1}
            onClick={() => {
              ref.current.src = data.img1;
            }}
          />
          <Image
            src={data.img2}
            onClick={() => {
              ref.current.src = data.img2;
            }}
          />
        </HStack>
        {whit ? (
          <BsHeartFill
            className={`${Styles.icon} ${Styles.icon2}`}
            onClick={Setwhitlist}
          />
        ) : (
          <BsHeart
            className={`${Styles.icon} ${Styles.icon1}`}
            onClick={Setwhitlist}
          />
        )}
      </Box>
      <Box>
        <Text as="h2">{data.title}</Text>
        <HStack>
          <Text as="h3">₹.{data.price}</Text>
          <Text as="h3">{data.strike}</Text>
          <Text as="p">Inclusive of all taxes</Text>
        </HStack>
        <HStack>
          <Text as="p">Extra 10% cashback upto INR 500 with</Text>
          <Image
            src="https://images.dailyobjects.com/marche/icons/zest-updated.png?tr=cm-pad_resize,v-2,h-18,dpr-1"
            w="40px"
            h="20px"
          />
        </HStack>
        <Button onClick={addtocart}>ADD TO CART</Button>
      </Box>
    </Box>
  );
}
