import { Grid, Spinner, VStack } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './Header';
import useFetch from './hooks';
import Items from './Items';

export default function Desk() {
    const [query, setQuery] = useState("");
    const [sortdata, setSortdata] = useState("");
    const [page, setPage] = useState(1);
    let url=`https://dailybackend.onrender.com/products?page=${page}&category=desks&sort=${sortdata}`;
    let { loading, error, list } = useFetch(query, page,url);
    const loader = useRef(null);
    const handleObserver = useCallback((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    }, []);
  
    useEffect(() => {
      const option = {
        root: null,
        rootMargin: "20px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleObserver, option);
      if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);
  
  
  if(query){list=list.filter((elem)=>elem.category===query)}
    if (sortdata === "LTH") {
      list = list.sort((a, b) => a.price - b.price);
    }else if (sortdata === "HTL") {
     list = list.sort((a, b) => b.price - a.price);
    }else{ list=list}
  return (
    <>
      <Header
        title="DESKS"
        setQuery={setQuery}
        setSortdata={setSortdata}
      />
      <Grid
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(3,1fr)",
          base: "repeat(1,1fr)",
        }}
        gap={6}
        p="0 2rem"
      >
        {list.map((elem) => {
          return <Items key={elem._id} data={elem} />;
        })}
        <div ref={loader} />
      </Grid>
      {loading &&  <VStack w="100%" minH="500px" alignItems="center" justifyContent="center">
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          />
          </VStack>}
        {error && <p>Error!</p>}
    </>
  )
}