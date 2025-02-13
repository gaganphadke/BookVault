import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Avatar} from 'flowbite-react';
import proPic from "../assets/profile.jpg"

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import required modules
import { Pagination } from "swiper/modules";
import { FaS, FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className='py-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="mt-7">
              <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, cupiditate dignissimos, sapiente incidunt sint ipsam in deleniti, deserunt blanditiis vitae nulla aperiam numquam. Omnis deserunt eum impedit dolor dignissimos.</p>
            <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"></Avatar>
            
            <h5 className="text-lg font-medium">Mark Ping</h5>
            <p className="text-base">CEO, ABC company</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="mt-7">
              <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, cupiditate dignissimos, sapiente incidunt sint ipsam in deleniti, deserunt blanditiis vitae nulla aperiam numquam. Omnis deserunt eum impedit dolor dignissimos.</p>
            <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"></Avatar>
            
            <h5 className="text-lg font-medium">Gen Gwin</h5>
            <p className="text-base">CEO, FEG company</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="mt-7">
              <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, cupiditate dignissimos, sapiente incidunt sint ipsam in deleniti, deserunt blanditiis vitae nulla aperiam numquam. Omnis deserunt eum impedit dolor dignissimos.</p>
            <Avatar alt="avatar of Jese" img={proPic} rounded className="w-10 mb-4"></Avatar>
            
            <h5 className="text-lg font-medium">Den Ding</h5>
            <p className="text-base">CEO, XYZ company</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review