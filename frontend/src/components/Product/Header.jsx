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

export default function Header({ title, setQuery, setSortdata ,query}) {
  return (
    <VStack w={"100%"} justifyContent="center" spacing={7} className={Styles.main}>
      <Heading as="h1" size="xl" noOfLines={1}>
        {title}
      </Heading>
      {title === "New Arrivals"&&
        <Box  className={Styles.categ} display={{ lg: "flex", md: "flex", base: "block" }}>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
          alt="All"
          className={query===""?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("")}
        />
        <Text className={Styles.text}>All</Text>
      </VStack>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
          alt="bag"
          className={query==="bag"?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("bag")}
        />
        <Text className={Styles.text}>Pedal Backpack</Text>
      </VStack>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
          alt="desks"
          className={query==="desks"?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("desks")}
        />
        <Text className={Styles.text}>Desks</Text>
      </VStack>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
          alt="watch"
          className={query==="watch"?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("watch")}
        />
        <Text className={Styles.text}>Watchbands</Text>
      </VStack>
    </Box>}
      {title === "SALES"&&
        <Box  className={Styles.categ} display={{ lg: "flex", md: "flex", base: "block" }}>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/new-arrival/all.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
          alt="All"
          className={query===""?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("")}
        />
        <Text className={Styles.text}>All</Text>
      </VStack>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/category/sale-messenger-bags.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
          alt="messengerbag"
          className={query==="messengerbag"?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("messengerbag")}
        />
        <Text className={Styles.text}>Messenger Bag</Text>
      </VStack>
      <VStack justifyContent="center" alignItems="center" spacing={1}>
        <Image
          src="https://images.dailyobjects.com/marche/icons/category/sale-wallets.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
          alt="wallet"
          className={query==="wallet"?`${Styles.text1} ${Styles.text2}`:Styles.text1}
          onClick={() => setQuery("wallet")}
        />
        <Text className={Styles.text}>Wallet</Text>
      </VStack>
    </Box>}
      <HStack>
        <Text as="h3">Fillter</Text>
        <Select placeholder="Select Filter option" onChange={(e)=>setSortdata(e.target.value)} >
          <option value="reset">Reset</option>
          <option value="LTH">Low to High</option>
          <option value="HTL">High to Low</option>
        </Select>
      </HStack>
    </VStack>
  );
}