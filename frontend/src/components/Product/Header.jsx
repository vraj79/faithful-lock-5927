import {
  Box,
  Heading,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <VStack w={"100%"} justifyContent="center" spacing={20}>
      <Heading as="h1" size="4xl" noOfLines={1}>
        New Arrivals
      </Heading>
      <HStack spacing={10} border="1px solid red">
        <VStack justifyContent="center" alignItems="center" spacing={5}>
          <Image
            src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="All"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>All</Text>
        </VStack>
        <VStack>
          <Image
            src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="bag"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Pedal Backpack</Text>
        </VStack>
        <VStack>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
            alt="desk"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Desks</Text>
        </VStack>
        <VStack>
          <Image
            src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
            alt="watch"
            className={`${Styles.text1} ${Styles.text2}`}
          />
          <Text className={Styles.text}>Watchbands</Text>
        </VStack>
      </HStack>
      <HStack>
        <Select placeholder="Select Filter option">
          <option value="LTH">Low to High</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
    </VStack>
  );
}
