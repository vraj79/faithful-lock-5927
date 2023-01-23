import { HiOutlineShoppingBag } from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { FiSearch } from "react-icons/fi";

import styles from "./HomeNavbar.module.css";
import { useBreakpointValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";

const HomeNavbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.navbar}>
        <div onClick={() => navigate("/")} className="navIcon">
          <img
            src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"
            alt=""
          />
        </div>
        {
          isDesktop?(
            <div className={styles.navItems}>

          <Link to="/newarrival"><span>NEW ARRIVALS</span></Link>
          <Link to="/wallet"><span>WALLETS</span></Link>
          <Link to="/desks"><span>DESKS</span></Link>
          <Link to="/sale"><span className={styles.navItemsSale}>SALE</span></Link>
          <Link to="/bag"><span>BAGS</span></Link>
          <Link to="/watch"><span>WATCH</span></Link>

        </div>
          ):<div></div>
        }
        <div className={styles.navUser}>
                <HiOutlineShoppingBag onClick={()=>navigate("/cart")} size={25} />
          <ImUser size={25} onClick={() =>navigate("/login")} />
          <FiSearch size={25} />
          <BsHeartFill size={25} onClick={()=>navigate("/wishlist")}/>
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
