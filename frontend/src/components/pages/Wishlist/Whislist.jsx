import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./wishlist.module.css";
export default function Whislist() {
  const navigate = useNavigate();
  const user = useSelector((user) => user.loginAuth.user);
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const getuser = async (id) => {
    const newuser = await axios.get(
      `https://dailybackend.onrender.com/user/${id}`
    );
    const loginuser = newuser.data.user[0];
    localStorage.setItem("user", JSON.stringify(loginuser));
    localStorage.setItem("cart", JSON.stringify(loginuser.cartitem));
    localStorage.setItem("wishlist", JSON.stringify(loginuser.wishlist));
  };
  useEffect(() => {
    getuser(user._id);
  }, [user._id, data]);

  const deleteitem = async (id, deleted) => {
    const res = await axios.post(
      `https://dailybackend.onrender.com/wishlist/delete/${id}`,
      deleted
    );
    const newdata = data.filter((elem) => elem._id !== res.data._id);
    localStorage.setItem("wishlist", JSON.stringify(newdata));
    setdata(newdata);
  };
  return (
    <Box
      display={{ lg: "grid", md: "grid", base: "block" }}
      className={styles.cartItem}
    >
      <div>
        {data.map((ele) => {
          return (
            <div>
              <div className={styles.cartItemData}>
                <img
                  src={ele.img1}
                  alt=""
                  onClick={() => navigate(`/products/${ele._id}`)}
                />
                <div>
                  <p>{ele.title}</p>
                  <span className={styles.price}>Rs.{ele.price}</span>
                  <span className={styles.line}>{ele.strike}</span>
                  <Flex style={{ margin: "2.5rem 0" }} gap={10}>
                    <div>
                      <RiDeleteBin6Line
                        size={30}
                        onClick={() => deleteitem(user._id, ele)}
                      />
                    </div>
                  </Flex>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
