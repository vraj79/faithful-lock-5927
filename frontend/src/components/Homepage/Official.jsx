import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Homepage.module.css";
import { Autoplay, EffectCoverflow } from "swiper";
import { Image } from "@chakra-ui/react";

const officialArr = [
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-1.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-2.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-3.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-4.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-5.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-6.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-7.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-8.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-9.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-10.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-12.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  },
  {
    url:
      "https://images.dailyobjects.com/marche/assets/images/other/artboard-13.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
  }
];

const Official = () => {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div className={styles.official}>
        <p className={styles.h2}>@dailyobjects_official</p>
        <div>
          <Swiper
            autoplay={{
              delay: 500
            }}
            slidesPerView={"4"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            effect={"coverflow"}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            loop={true}
          >
            {officialArr.map((ele, i) =>
              <SwiperSlide key={i}>
                <Image width={"100%"} src={ele.url} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
      <br />
      <hr />
      {/* Featured In */}
      <div>
        <p
          style={{ margin: "2.5rem 0rem", textAlign: "center" }}
          className={styles.h2}
        >
          FEATURED IN
        </p>
        <img
          style={{ margin: "2.5rem 0rem" }}
          src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1"
          alt=""
        />
      </div>
      <br />
      <hr />
      {/* some more */}
      <p
        style={{ margin: "2.5rem 0rem", textAlign: "center" }}
        className={styles.h2}
      >
        GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS
      </p>
      <div className={styles.input}>
        <input type="text" placeholder="Enter Your Email" />
        <p>
          <button>SUBSCRIBE</button>
        </p>
      </div>
      <div className={styles.fhm}>
        <div className={styles.fhmItem}>
          <img
            src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Quick Delivery</p>
        </div>
        <div className={styles.fhmItem}>
          <img
            src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Easy Returns</p>
        </div>
        <div className={styles.fhmItem}>
          <img
            src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
            alt=""
          />
          <p>Quality Assured</p>
        </div>
      </div>
    </div>
  );
};

export default Official;
