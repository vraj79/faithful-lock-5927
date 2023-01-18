import { Grid } from "@chakra-ui/react";
import React from "react";
import Bagdata from "../Data/bag.json";
import Header from "./Header";
import Items from "./Items";
export default function Product() {
    return (<>
        <Header/>
    <Grid
      templateColumns={{ lg: "repeat(4, 1fr)", md: "repeat(3,1fr)" ,base:"repeat(1,1fr)"}}
      gap={6}
      p="0 2rem"
    >
      {Bagdata.map((elem) => {
        return <Items key={elem.price} data={elem} />;
      })}
    </Grid>
      </>
  );
}
