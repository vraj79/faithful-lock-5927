import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { FiSearch } from "react-icons/fi";

import styles from "./HomeNavbar.module.css";
import { useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const navigate=useNavigate();
  return (
    <div>
      <div className={styles.navbar}>
        <div onClick={()=>navigate('/')} className="navIcon">
          <img
            src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"
            alt=""
          />
        </div>
        {
          isDesktop?(
            <div className={styles.navItems}>
          <span onClick={()=>navigate('/newarrival')}>NEW ARRIVALS</span>
          <span onClick={()=>navigate('/')}>CASES & SLEEVES</span>
          <span onClick={()=>navigate('/')}>ACCESSORIES</span>
          <span className={styles.navItemsSale}>SALE</span>
          <span onClick={()=>navigate('/bag')}>BAGS & WALLETS</span>
          <span onClick={()=>navigate('/')}>HOME OFFICE</span>
          <span onClick={()=>navigate('/')}>COLLECTIONS</span>
          <span onClick={()=>navigate('/')}>GIFTING</span>
        </div>
          ):<div></div>
        }
        <div className={styles.navUser}>
          <HiOutlineShoppingBag onClick={()=>navigate("/cart")} size={25} />
          <ImUser size={25}/>
          <FiSearch size={25}/>
        </div>
      </div>
      <img
        src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1349,dpr-1"
        alt=""
      />
    </div>
  );
};

export default HomeNavbar;
