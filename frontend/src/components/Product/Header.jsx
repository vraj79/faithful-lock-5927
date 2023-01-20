import {
  Box,
  Heading,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Styles from "./Header.module.css";

export default function Header({title}) {
  return (
    <VStack w={"100%"} justifyContent="center" spacing={7} className={Styles.main}>
      <Heading as="h1" size="2xl" noOfLines={1}>
        {title}
      </Heading>
      <Box spacing={5} className={Styles.categ} display={{lg:"flex",md:"flex",base:"block"}}>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="All"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>All</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="bag"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Pedal Backpack</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="desk"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Desks</Text>
        </VStack>
        <VStack justifyContent="center" alignItems="center" spacing={1}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="watch"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Watchbands</Text>
        </VStack>
      </Box>
      <HStack>
        <Text as="h3">Fillter</Text>
        <Select placeholder="Select Filter option">
          <option value="LTH">Low to High</option>
          <option value="HTL">High to Low</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
    </VStack>
  );
}
