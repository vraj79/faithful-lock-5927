import { Box, Card, CardFooter, Image, Stack, Text } from "@chakra-ui/react";
import Styles from "./Items.module.css";
import React, { useRef, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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
export default function Items({ data }) {
  // console.log(data.category=="bag");
  const user = useSelector((user) => user.loginAuth.user);
  const [wishlist, setwishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || user.wishlist);

  const navigate = useNavigate();
  // const id=useParams()
  const [whit, setWhit] = useState(false);
  const ref = useRef(null);
  const ChangeImage1 = () => {
    ref.current.src = data.img1;
  };
  const ChangeImage = () => {
    ref.current.src = data.img2;
  };
  const addtowislist = async () => {
    const cartlist = wishlist.filter((elem) => elem._id === data._id);
    try {
      if (cartlist.length > 0) {
        alert("Already Add in wishlist");
        setWhit(true);
      } else {
        const res = await axios.post(
          `http://localhost:8080/cart/wishlist/${user._id}`,
          data
        );
        const newdata=[...wishlist, data]
        setwishlist(newdata);
        localStorage.setItem("wishlist", JSON.stringify(newdata));
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Card w="100%" m="auto" mt={10} position="relative" borderRadius={20}>
      <Box
        onMouseOver={ChangeImage}
        onMouseOut={ChangeImage1}
        h="500px"
        w="100%"
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        onClick={()=>navigate(`/products/${data._id}`)}
      >
        <Image
          src={data.img1}
          alt={data.title}
          ref={ref}
          w="100%"
          h="100%"
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          bg="#f7f7f7"
        />
      </Box>
      <CardFooter>
        <Stack>
          <Text color="gray"  fontSize={{lg:"md",md:"sm",base:"xs"}}>
            {data.title}
          </Text>
          <Text color="black" fontSize={{lg:"2xl",md:"xl",base:"xl"}} fontWeight="bold">
            Rs.{data.price}
            <span
              style={{
                color: "gray",
                textDecoration: "line-through",
                marginLeft: "20px",
                fontSize:"1.25rem"
              }}
            >
              {data.strike}
            </span>
          </Text>
          
          <Text color="red" fontSize={{ lg: "md", md: "md", base: "md" }} fontWeight="bold">
              FREE DUFFLE BAG / WALLET*
            </Text>
        </Stack>
      </CardFooter>
      {whit ? (
        <BsHeartFill
          className={`${Styles.icon} ${Styles.icon2}`}
          onClick={addtowislist}
        />
      ) : (
        <BsHeart
          className={`${Styles.icon} ${Styles.icon1}`}
          onClick={addtowislist}
        />
      )}
      {data.stocks <= 0 ? (
        <>
          <Box className={Styles.ribben_wrap}>
            <Box className={Styles.ribben}>Out Of Stock</Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}
