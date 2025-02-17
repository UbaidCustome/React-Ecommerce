import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Pimg1 from '../../assets/images/eight.jpg';
import Pimg2 from '../../assets/images/nine.jpg';
import Pimg3 from '../../assets/images/ten.jpg';
import Pimg4 from '../../assets/images/eleven.jpg';
import { Rating } from 'react-simple-star-rating'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4)

    return (
    <Layout>
        <div className='container product-detail'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav aria-label="breadcrumb" className='py-4'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page"><Link to="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dummy Product</li>
                        </ol>
                    </nav>                    
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-md-5'>
                    <div className='row'>
                        <div className='col-md-2'>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    direction={`vertical`}
                                    spaceBetween={10}
                                    slidesPerView={6}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-2"
                                >
                                        
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={Pimg1} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={Pimg2} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={Pimg3} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={Pimg4} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='content'>
                                        <img 
                                            src={Pimg4} 
                                            alt="" 
                                            height={100}
                                            className='w-100' />
                                    </div>                                                                      
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='col-md-10'>
                            <Swiper
                                style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                                }}
                                loop={true}
                                spaceBetween={0}
                                navigation={true}
                                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={Pimg1} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>           
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={Pimg2} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>           
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={Pimg3} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>           
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={Pimg4} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>           
                                <SwiperSlide >
                                    <div className='content'>
                                    <img 
                                        src={Pimg4} 
                                        alt="" 
                                        className='w-100' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <h2>Dummy Product</h2>
                    <div className='d-flex'>
                        <Rating
                            size={20}
                            readonly
                            initialValue={rating}
                        />
                        <span className='pt-1 ps-2'>10 Reviews</span>
                    </div>
                    <div className='price h3 py-3'>
                        $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>        
                    </div>
                    <div className='sizes'>
                        <h4 className='py-2'><b>Select Sizes</b></h4>
                        <button className='btn btn-size'>S</button>
                        <button className='btn btn-size ms-1'>M</button>
                        <button className='btn btn-size ms-1'>L</button>
                        <button className='btn btn-size ms-1'>XL</button>
                    </div>
                    <div className='add-to-cart'>
                        <button className='btn btn-primary mt-3'>Add To Cart</button>
                    </div>
                    <hr />
                    <div>
                        <strong>SKU:</strong> 123456
                    </div>
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col-md-12'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Description">
                            Tab content for Description
                        </Tab>
                        <Tab eventKey="profile" title="Reviews (10)">
                            Tab content for Reveiws
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
        
    </Layout>
  )
}

export default Product