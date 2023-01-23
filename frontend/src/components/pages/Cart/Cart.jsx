import styles from "./cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Box, Button, Flex } from "@chakra-ui/react";
import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const user = useSelector((user) => user.loginAuth.user);
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [striker, setStriker] = useState(0);
  const [qua, setQua] = useState(1);

  const navigate = useNavigate();

  const checkPrice = () => {
    let pr = data.reduce((p, elem) => p + Number(elem.price), 0);
    setPrice(pr);
    let st = data.reduce((p, elem) => p + Number(elem.strike), 0);
    setStriker(st - pr);
  };

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
    checkPrice();
    getuser(user._id);
  }, [qua, user._id, data]);

  const deleteitem = async (id, deleted) => {
    const res = await axios.post(
      `https://dailybackend.onrender.com/cart/delete/${id}`,
      deleted
    );
    const newdata = data.filter((elem) => elem._id !== res.data._id);
    localStorage.setItem("cart", JSON.stringify(newdata));
    setdata(newdata);
  };
  const EmptyCart = () => {
    return (
      <div className={styles.empty}>
        <p>YOUR SHOPPING CART IS EMPTY</p>
        <p>Fill it with DailyObjects</p>
        <p>
          <Button
            onClick={() => navigate("/sale")}
            size="lg"
            colorScheme={"teal"}
          >
            Browse Products
          </Button>
        </p>
      </div>
    );
  };

  return (
    <div className={styles.cart}>
      <div>
        {data.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <p className={styles.heading}>SHOPPING BAG</p>
            <hr />
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
                              <button
                                onClick={() => setQua(qua - 1)}
                                disabled={qua === 1}
                                style={{
                                  width: "5vh",
                                  height: "5vh",
                                  border: "2px solid gray",
                                }}
                              >
                                -
                              </button>
                              <button
                                style={{
                                  width: "5vh",
                                  height: "5vh",
                                  border: "2px solid gray",
                                }}
                              >
                                {qua}
                              </button>
                              <button
                                onClick={() => setQua(qua + 1)}
                                disabled={qua === 5}
                                style={{
                                  width: "5vh",
                                  height: "5vh",
                                  border: "2px solid gray",
                                }}
                              >
                                +
                              </button>
                            </div>
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
              <div>
                <OrderSummary
                  price={price}
                  discount={striker}
                  total={data.length}
                />
              </div>
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
