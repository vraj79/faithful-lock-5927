import styles from "./cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Box, Button ,Flex} from "@chakra-ui/react";
import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";



const Cart = () => {
 
  const navigate=useNavigate()

  
  // const data=[]

  

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
