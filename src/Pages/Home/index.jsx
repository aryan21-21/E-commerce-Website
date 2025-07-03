// Basic styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// React and other components
import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { CiMail } from "react-icons/ci";

// Local components & context
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import ProductModel from "../../Components/ProductModal";
import { MyContext } from '../../App';

// Assets
import Banner from "../../assets/Fashion/Banner.jpg";
import Banner2 from "../../assets/Fashion/Banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
import banner4 from "../../assets/Banner/banner4.jpg";
import coupon from "../../assets/coupon/coupon.png";

// Products
import Product1 from './Products/Product1';
import Product2 from './Products/Product2';
import Product3 from './Products/Product3';
import Product4 from './Products/Product4';
import Product5 from './Products/Product5';
import Product6 from './Products/Product6';
import NewProduct1 from './NewProducts/NewProduct1';
import NewProduct2 from './NewProducts/NewProduct2';
import NewProduct3 from './NewProducts/NewProduct3';
import NewProduct4 from './NewProducts/NewProduct4';


function index() {

  const context = useContext(MyContext) 
  const[isOpenProductModel,setisOpenProductModel]=useState(false);
  const viewProduct=(id)=>{
    context.setisOpenProductModel(true);
  }
  return (
    <div>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container-fluid px-0"> {/* Full width without padding */}
          <div className="row gx-0"> {/* No gutters between columns */}
            
            {/* LEFT BANNERS */}
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner" style={{ padding: "10px" }}>
                  <img src={Banner} className="cursor w-100" />
                </div>
                <div className="banner mt-4" style={{ padding: "10px" }}>
                  <img src={Banner2} className="cursor w-100" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-9">
              {/* -- BEST SELLERS HEADING -- */}
              <div className="d-flex align-items-center w-100">
                <div className="info">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-muted text-sml mb-0">
                    Do not miss the current offers until the end of June.
                  </p>
                </div>
                <div className="ms-auto">
                  <Button className="viewAll">
                    View All <IoIosArrowRoundForward />
                  </Button>
                </div>
              </div>

              {/* -- PRODUCT SLIDER -- */}
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={false}
                  navigation={false}
                  autoplay={{
                    delay: 2500,      // 2.5 seconds
                    disableOnInteraction: false,
                  }}
                  loop={true}         // Optional: allows continuous loop sliding
                  modules={[Navigation, Autoplay]} // ✅ Add Autoplay here
                  className="mySwiper"
                >
                  <SwiperSlide><Product1 /></SwiperSlide>
                  <SwiperSlide><Product2 /></SwiperSlide>
                  <SwiperSlide><Product3 /></SwiperSlide>
                  <SwiperSlide><Product4 /></SwiperSlide>
                  <SwiperSlide><Product5 /></SwiperSlide>
                  <SwiperSlide><Product6 /></SwiperSlide>
                </Swiper>
              </div>

              {/* -- NEW PRODUCTS SECTION -- */}
             <div className="d-flex align-items-center w-100 mt-4">
                <div className="info">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-muted text-sml mb-0">New products with updated stocks.</p>
                </div>
                <div className="ms-auto">
                  <Button className="viewAll">
                    View All <IoIosArrowRoundForward />
                  </Button>
                </div>
              </div>

              {/* -- NEW PRODUCT ITEMS -- */}
              <div className="product_row productRow2 w-100 d-flex flex-wrap gap-3">
                  <div className="product_row row row-cols-2 row-cols-md-4 g-4 mt-1">
                    <div className="col">
                      <NewProduct1 />
                    </div>
                    <div className="col">
                      <NewProduct2 />
                    </div>
                    <div className="col">
                      <NewProduct3 />
                    </div>
                    <div className="col">
                      <NewProduct4/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                  </div>

              </div>

              {/* -- BOTTOM BANNERS -- */}
              <div className="d-flex mt-4 mb-5 bannerSec gap-3 w-100">
                <div className="banner w-100">
                  <img src={banner3} className="cursor w-100 rounded" alt="banner3" />
                </div>
                <div className="banner w-100">
                  <img src={banner4} className="cursor w-100 rounded" alt="banner4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- NEWSLETTER SECTION -- */}
      <section className="newsLetter mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <p className="text-white mb-1">$20 discount for your first order</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subscription now <br />to get updates on promotions and coupons.</p>
              <form>
                <CiMail />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-5">
              <img src={coupon} alt="Coupon" />
            </div>
          </div>
        </div>
      </section>

      <br />
    </div>
  );
}

export default index;
