import { Link } from 'react-router-dom'
import styles from './Homepage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const shopCategories=[
  {id:1,
    url: "https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Cases"
  },
  {id:2,
    url: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Laptop Sleeves"
  },
  {id:3,
    url: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Charging Solution"
  },
  {id:4,
    url: "https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Tote Bags"
  },
  {id:5,
    url: "https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Crossbody Bags"
  },
  {id:6,
    url: "https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Backpack"
  },
  {id:7,
    url: "https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Desk Mat"
  },
  {id:8,
    url: "https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    title:"Watchbands"
  }
]

const newArrivals=[
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in 6 Colors",
    title:"Pedal Backpack"
  },
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6676.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in 2 Colors",
    title:"Clock & Dock"
  },
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in 3 Colors",
    title:"Urban Briefcase"
  },
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in 4 Colors",
    title:"Align Notebooks"
  },
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in Black Colors",
    title:"Surge 4-in-1 Cable"
  },
  {
    url: "https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,w-874,dpr-1",
    color:"Available in 9 Colors",
    title:"Macbook Cases"
  }
]

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.firstHomeItem}>
        <img src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>
      <div className={styles.shopCategories}>
        <div className={styles.cat_one}>
          <p>SHOP CATEGORIES</p>
          <p>Now browse our selection of carefully curated products in sorted categories.</p>
        </div>
        <div className={styles.cat_two}>
        <Swiper
              slidesPerView={4}
              spaceBetween={0}
              autoplay={{
                delay: 1000,
              }}
              pagination={{clickable:true}}
              modules={[Pagination,Navigation,Autoplay]}
              navigation={true}
              className="mySwiper"
              loop={true}
            >
              {shopCategories.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <img width={"100%"} src={ele.url} alt="" />
                  <p>{ele.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      <div className={styles.homeItems}>
        <img src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>
      <h2>STUDIO COLLECTIONS</h2>
      <div className={styles.shopCollections}>
        <div className={styles.shopCollectionsItems}>
          <img src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>DREAMSCAPE</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </div>
        <div className={styles.shopCollectionsItems}>
          <img src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>ZODIAC</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </div>
        <div className={styles.shopCollectionsItems}>
          <img src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>PIXEL</p>
          <p>A reflection of modern pop-culture, this collection has a vintage appeal that evokes nostalgia.</p>
          <p ><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </div>
      </div>
      <div className={styles.firstHomeItem}>
        <img src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>
      <div className={styles.shopCategories}>
        <div className={styles.cat_one}>
          <p>NEW ARRIVALS</p>
          <p>Check out our newest launches.</p>
        </div>
        <div className={styles.cat_two}>
          <Swiper
              slidesPerView={4}
              spaceBetween={0}
              autoplay={{
                delay: 1000,
              }}
              pagination={{clickable:true}}
              modules={[Pagination,Navigation,Autoplay]}
              navigation={true}
              className="mySwiper"
              loop={true}
            >
              {newArrivals.map((ele,i) => (
                <SwiperSlide key={i}>
                  <img width={"100%"} src={ele.url} alt="" />
                  <p style={{fontSize:"14px",color:"gray"}}>{ele.color}</p>
                  <p>{ele.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      <div className={styles.shopCollections}>
        <div className={styles.shopCollectionsItems}>
          <img src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" alt="" />
          <p>CHARGING SOLUTIONS</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </div>
        <div className={styles.shopCollectionsItems}>
          <img src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" alt="" />
          <p>WORK ESSENTIALS</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Homepage