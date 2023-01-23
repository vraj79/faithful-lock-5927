import { Grid, Spinner, VStack } from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Items from "./Items";
import useFetch from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { handleProductdata } from "../../redux/Product/action";
export default function Sales() {
  const Reset = useSelector((b) => b.productReducer.Reset);
  const dispatch = useDispatch();
  const [count, setCount] = useState(false);
  const [query, setQuery] = useState("");
  const [sortdata, setSortdata] = useState("");
  const [page, setPage] = useState(1);
  let category;
  if(query){category=query}
  let url=`https://dailybackend.onrender.com/products?maincategory=sales&page=${page}&${category}&sort=${sortdata}`;
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
  } else if(sortdata==="reset") {
      list = Reset;
    }
 if (query === "" && !count && list.length > 0 && sortdata==="") {
    dispatch(handleProductdata(list));
  }
  return (
    <>
      <Header
        title="SALES"
        query={query}
        setQuery={setQuery}
        setSortdata={setSortdata}
        setCount={setCount}
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
  );
}
