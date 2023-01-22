import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminProduct } from "../../../redux/AdminShowProduct/adminShowProduct.action";
import ContectChart from "../chart/ContectChart";
import ContectChartBar from "../chart/ContectChartBar";
import ContectChartMultiaxis from "../chart/ContectChartMultiaxis";

const AdminDashbord = () => {
  const { adminallProduct } = useSelector((store) => store.adminShowProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminProduct());
  }, []);
  let category = [];
  let subCategory = [];
  let stokes = [];
  adminallProduct.forEach((ele) => {
    category.push(ele.category);
    subCategory.push(ele.maincategory);
    stokes.push(ele.strike);
  });

  function ContectData(data) {
    let obj = {};
    let objkey = [];
    let objvalue = [];

    for (let i = 0; i < data.length; i++) {
      if (obj[data[i]] === undefined) {
        obj[data[i]] = 1;
      } else {
        obj[data[i]]++;
      }
    }
    for (let key in obj) {
      objvalue.push(obj[key]);
      objkey.push(key);
    }
    return [objvalue, objkey];
  }
  let ContectNum = ContectData(category);
  let subContectNum = ContectData(subCategory);
  let stokesNum = ContectData(stokes);

  // console.log(ContectNum);
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Dashboard
      </Heading>
      <SimpleGrid
        columns={[1, null, 2]}
        alignItems={"center"}
        spacing="60px"
        bg={"white"}
        mt={6}
      >
        <Box p={6}>
          <ContectChartBar
            name={"Total SubCategory"}
            label={"SubCategory"}
            color={["#10B981", "#F59E0B", "#4F46E5", "#3B82F6", "#EF4444"]}
            labels={ContectNum[1]}
            dataNum={ContectNum[0]}
          />
        </Box>
        <Box width={"60%"} margin={"auto"} p={6}>
          <ContectChartMultiaxis
            name={"Total MainCategory"}
            label={"MainCategory"}
            color={["#10B981", "#EF4444"]}
            labels={subContectNum[1]}
            dataNum={subContectNum[0]}
          />
        </Box>
        <Box p={6}>
          <ContectChart
            name={"Total stoke"}
            label={"stoke"}
            color={"#3B82F6"}
            labels={stokesNum[1]}
            dataNum={stokesNum[0]}
          />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default AdminDashbord;
