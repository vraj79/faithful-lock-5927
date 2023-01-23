import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.css'
export const OrderSummary = ({ show,price,discount,total}) => {
  const navigate = useNavigate();
  return <Box w={{ lg: "100%", md: "100%", base:"100%"}} boxSizing="border-box" className={styles.summary}>
      <Box  w={{ lg: "100%", md: "100%", base:"100%"}} >
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>ORDER SUMMARY</p>
        <Box className={styles.summaryItem}>
        <p>Item Total ({ total} Items)</p> <p>Rs {price}</p>
        </Box>
        <Box className={styles.summaryItem}>
          <p>Discount</p> <p>Rs {discount}</p>
        </Box>
        <Box className={styles.summaryItem}>
          <p>Shipping</p> <p>Free</p>
        </Box>
        <hr />
        <Box className={styles.summaryItem}>
          <Box>
            <p>Grand Total</p>
            <p>(Inclusive of Taxes)</p>
          </Box>
          <Box style={{ textAlign: "right" }}>
            <p>Rs.{price-discount}</p>
            <p>You Saved Rs.{discount}</p>
          </Box>
        </Box>
       {show? <Button width={"100%"} style={{ margin: "1rem 0" }} size='lg' colorScheme={"whatsapp"} onClick={()=>navigate("/card")}>CHECKOUT</Button>:
        <Button width={"100%"} style={{ margin: "1rem 0" }} size='lg' colorScheme={"whatsapp"} onClick={()=>navigate("/address")}>CHECKOUT</Button>}
      </Box>
    </Box>;
  }