import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Home.module.css";
import { Navigation, Pagination } from "swiper";
import img from "../../public/landing.jpg"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import Link from 'next/link'

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public/v2/posts`)
      .then((res) => {
        setData(res?.data);
        // console.log(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper swiper-container"
      >
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {data.map((item) => (
            <SwiperSlide key={item.id} to={`/post/${item.id}`} className="swiper-slide">
              <div className={styles.card}>
                <div>
                  <Image src={img} className={styles.cardImg} />
                </div>
                <div className={styles.cardTitle}>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                </div>
                <div className={styles.cardContent}>
                  <p>
                    {item.body}
                  </p>
                  <Link href={`/post/${item.id}`} className={`btn btn-outline-primary mt-1 `} style={{ fontSize: "10px"}} type="button">Detail Postingan</Link>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </div>
        </div>

        {/* <div className="row">
          <div className="col-10">
            <SwiperSlide className="swiper-slide">
              <div className={styles.card}>
                <div>
                  <Image src={img} className={styles.cardImg} />
                </div>
                <div className={styles.cardTitle}>
                  <h3>Niall Horan</h3>
                  <span>Web Developer</span>
                </div>
                <div className={styles.cardContent}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div> */}
      </Swiper>
    </>
  );
};

export default Card;
