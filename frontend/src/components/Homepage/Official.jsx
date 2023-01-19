import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Homepage.module.css'
import { Autoplay, EffectCoverflow } from 'swiper'
import { Image } from '@chakra-ui/react'

const officialArr=[
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-1.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-2.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-3.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-4.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-5.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-6.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-7.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-8.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-9.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-10.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-12.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"},
    {url:"https://images.dailyobjects.com/marche/assets/images/other/artboard-13.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"}
  ]

const Official = () => {
  return (
    <div style={{backgroundColor:"#f7f7f7"}}>
        <div className={styles.official}>
            <p className={styles.h2}>@dailyobjects_official</p>
        <div>
            <Swiper
              autoplay={{
                delay: 500,
              }}
              slidesPerView={"4"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              effect={"coverflow"}
              modules={[EffectCoverflow,Autoplay]}
              className="mySwiper"
              loop={true}
            >
              {officialArr.map((ele,i) => (
                <SwiperSlide key={i}>
                  <Image width={"100%"} src={ele.url} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
        <br />
        <hr />
        {/* Featured In */}
        <div>
            
        </div>
    </div>
  )
}

export default Official