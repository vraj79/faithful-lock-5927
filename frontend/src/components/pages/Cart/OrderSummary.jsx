import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.css'
export const OrderSummary = () => {
  const navigate = useNavigate();
    return <div className={styles.summary}>
      <div>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>ORDER SUMMARY</p>
        <div className={styles.summaryItem}>
          <p>Item Total (4 Items)</p> <p>Rs 8097</p>
        </div>
        <div className={styles.summaryItem}>
          <p>Discount</p> <p>Rs 3000</p>
        </div>
        <div className={styles.summaryItem}>
          <p>Shipping</p> <p>Free</p>
        </div>
        <hr />
        <div className={styles.summaryItem}>
          <div>
            <p>Grand Total</p>
            <p>(Inclusive of Taxes)</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>Rs.5097</p>
            <p>You Saved Rs.5400</p>
          </div>
        </div>
        <Button width={"100%"} style={{ margin: "1rem 0" }} size='lg' colorScheme={"whatsapp"} onClick={()=>navigate("/card")}>CHECKOUT</Button>
      </div>
    </div>;
  }