import { Box, Card, CardFooter, Image, Stack, Text } from "@chakra-ui/react";
import Styles from "./Items.module.css";
import React, { useRef, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  // const id=useParams()
  const [whit, setWhit] = useState(true);
  const ref = useRef(null);
  const ChangeImage1 = () => {
    ref.current.src = data.img1;
  };
  const ChangeImage = () => {
    ref.current.src = data.img2;
  };
  const Setwhitlist = () => {
    setWhit(!whit);
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
          onClick={Setwhitlist}
        />
      ) : (
        <BsHeart
          className={`${Styles.icon} ${Styles.icon1}`}
          onClick={Setwhitlist}
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
