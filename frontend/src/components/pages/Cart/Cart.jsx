import styles from "./cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Box, Button ,Flex} from "@chakra-ui/react";
import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  // const data = [
  //   {
  //     img1:
  //       "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-393,h-485,dpr-1",
  //     title: "All Beige Pedal Daypack",
  //     img2:
  //       "https://images.dailyobjects.com/marche/product-images/1201/all-beige-pedal-daypack-images/All-Beige-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-392,h-483,dpr-1",
  //     price: 1699,
  //     strike: 2999,
  //     category: "bag",
  //     stocks: 2
  //   },
  //   {
  //     "img1": "https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-393,h-485,dpr-1",
  //     "title": "All Blue Pedal Daypack",
  //     "img2": "https://images.dailyobjects.com/marche/product-images/1201/all-blue-pedal-daypack-images/All-Blue-Pedal-Daypack-13t.jpg?tr=cm-pad_crop,v-2,w-392,h-483,dpr-1",
  //     "price": 1299,
  //     "strike": 2599,
  //     "category": "bag",
  //     "stocks": 5
  //   }
  // ];
  const navigate=useNavigate()

  
  const data=JSON.parse(localStorage.getItem("cart"))||[]

  

  const EmptyCart=()=>{
    return (
      <div className={styles.empty}>
        <p>YOUR SHOPPING CART IS EMPTY</p>
        <p>Fill it with DailyObjects</p>
        <p><Button onClick={()=>navigate("/sale")} size='lg' colorScheme={"teal"}>Browse Products</Button></p>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <div>
        {data.length === 0
          ? <EmptyCart/>
          : <>
                <p className={styles.heading}>SHOPPING BAG</p>
          <hr />
              <div className={styles.cartItem}>
              <div>
                {data.map(ele => {
                  return (
                    <div>
                      <div className={styles.cartItemData}>
                        <img src={ele.img1} alt="" />
                        <div>
                          <p>
                            {ele.title}
                          </p>
                          <span className={styles.price}>
                            Rs.{ele.price}
                          </span>
                          <span className={styles.line}>
                            {ele.strike}
                          </span>
                          <Flex style={{margin:"2.5rem 0"}} gap={10}>
                          <div>
                            <Button>-</Button>
                            <Button>1</Button>
                            <Button>+</Button>
                          </div>
                          <div>
                            <RiDeleteBin6Line size={30}/>
                          </div>
                          </Flex>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
                  <div>
                    <OrderSummary/>
                  </div>
                </div>
              </>
            }
      </div>
    </div>
  );

  
};

export default Cart;
