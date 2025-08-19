import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import React  from 'react';
const HomeCat = ()=>{
    return(
        <>
        <section className='homeCat'>
            <div className="contanier">

                <h3 className=' mb-3 hd mt-0'>Featured Products</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={5}
                    slidesPerGroup={1}
                    navigation={false} // ✅ Arrows turned off
                    autoplay={{
                        delay: 2000,              // Auto-slide every 2 seconds
                        disableOnInteraction: false, // Keeps autoplay on after manual swipe
                    }}
                    loop={true}                // Optional: for continuous scroll
                    modules={[Autoplay, Pagination]} // ✅ Include Autoplay module
                    className="mySwiper"
                    >

                
                    <SwiperSlide>
                        <div className='item text-center cursor '>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-53-346x310.jpg'></img>
                            <h6>Melon</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-52-346x310.jpg'></img>
                            <h6>Banana</h6>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-49-346x310.jpg'></img>
                            <h6>Coca Cola</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-42-346x310.jpg'></img>
                            <h6>Garlic</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-39-346x310.jpg'></img>
                            <h6>Graps</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-28-346x310.jpg'></img>
                            <h6>Maple Syrup</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-23-346x310.jpg'></img>
                            <h6>Pepsi-2L</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-15-346x310.jpg'></img>
                            <h6>Raseberry Juice</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-6-346x310.jpg'></img>
                            <h6>Chocolate Cake</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-346x310.jpg'></img>
                            <h6>Strawberry Soda</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item text-center'>
                            <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-35-600x540.jpg'></img>
                            <h6>Lemon Cookies</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </section>
        </>
    );
}

export default HomeCat