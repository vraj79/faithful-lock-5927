import { Link } from 'react-router-dom'
import styles from './Homepage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Box, Grid, GridItem, Heading, Image, useBreakpointValue } from '@chakra-ui/react';
import Official from './Official';

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
  const slideCount = useBreakpointValue({ sm:2,base: 1,md:3,lg: 4 })
  const isDesktop = useBreakpointValue({ base: false,md:true, lg: true })
  return (
    <div className={styles.homepage}>
      <Box className={styles.firstHomeItem}>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </Box>

      {/* Shop Categories */}
      <Grid templateColumns={{ base: '100%', md: '20% 80%', lg: '20% 80%' }} className={styles.shopCategories}>
        <GridItem className={styles.cat_one}>
          <p>SHOP CATEGORIES</p>
          <p>Now browse our selection of carefully curated products in sorted categories.</p>
        </GridItem>
        <GridItem className={styles.cat_two}>
        <Swiper
              slidesPerView={slideCount}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
              }}
              modules={[Navigation,Autoplay]}
              navigation={isDesktop}
              className="mySwiper"
              loop={true}
            >
              {shopCategories.map((ele) => (
                <SwiperSlide key={ele.id}>
                  <Image width={"100%"} src={ele.url} alt="" />
                  <p>{ele.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
        </GridItem>
      </Grid>
      <div className={styles.homeItems}>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>

      {/* Studio Collections */}
      <Heading className={styles.h2}>STUDIO COLLECTIONS</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} className={styles.shopCollections}>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>DREAMSCAPE</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>ZODIAC</p>
          <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>PIXEL</p>
          <p>A reflection of modern pop-culture, this collection has a vintage appeal that evokes nostalgia.</p>
          <p ><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
      </Grid>
      <Grid className={styles.homeItems}>
        <GridItem>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
        </GridItem>
      </Grid>

      {/* New Arrivals */}
      <div className={styles.shopCategories}>
        <div className={styles.cat_one}>
          <p>NEW ARRIVALS</p>
          <p>Check out our newest launches.</p>
        </div>
        <div className={styles.cat_two}>
          <Swiper
              slidesPerView={slideCount}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
              }}
              modules={[Navigation,Autoplay]}
              navigation={isDesktop}
              className="mySwiper"
              loop={true}
            >
              {newArrivals.map((ele,i) => (
                <SwiperSlide key={i}>
                  <Image width={"100%"} src={ele.url} alt="" />
                  <p style={{fontSize:"14px",color:"gray"}}>{ele.color}</p>
                  <p>{ele.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={'10'} className={styles.shopCollections}>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" alt="" />
          <p>CHARGING SOLUTIONS</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1" alt="" />
          <p>WORK ESSENTIALS</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
      </Grid>

      {/* Collections */}
      <Heading className={styles.h2}>COLLECTIONS</Heading>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} className={styles.shopCollections}>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>08:01 COLLECTION</p>
          <p>Features a range of chroniclers that let you preserve all brief encounters on your journey.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/zootopia-Web.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>DAILYOBJECTS X SMARTSTERS</p>
          <p>A playful and functional range of indoor desk and storage solutions for children.</p>
          <p><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
        <GridItem className={styles.shopCollectionsItems}>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,w-421,dpr-1" alt="" />
          <p>TARP COLLECTION</p>
          <p>Urban-inspired carriers, made for free-spirited and powerful wearers.</p>
          <p ><Link className={styles.coll_link} to='/'>Shop Now</Link></p>
        </GridItem>
      </Grid>
      <div className={styles.homeItems}>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>
      <div className={styles.homeItems}>
        <Image src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,w-1349,dpr-1" alt="" />
      </div>
      
      {/* Our Story */}
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap="50" className={styles.ourStory}>
        <GridItem>
          <h2 className={styles.h1}>OUR STORY</h2>
          <p>Founded in 2012, DailyObjects is a design-obsessed lifestyle accessories brand committed to making your everyday carry #lessordinary.</p>
          <p>You can look forward to a carefully-crafted range of products, made from long-lasting materials, with designs that stand out and make your life easy. With DailyObjects, let your lifestyle reflect your sensibilities as you go on to make your every day #lessordinary.</p>
          <p ><Link className={styles.coll_link} to='/'>Read More</Link></p>
        </GridItem>
        <GridItem>
          <Image style={{marginTop:"1.2rem"}} src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-788,dpr-1" alt=''/>
        </GridItem>
      </Grid>
      <br />
      <hr />

      {/* dailyObjects Official */}
      <Official/>
      
    </div>
  )
}

export default Homepage