import React, {useState, useEffect} from 'react'
import './slide.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import SlideItem from '../SlideItem/SlideItem';
import clientAxios from '../../apis';

export default function Slide({ slideCastMov }) {
  console.log({slideCastMov})
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const [casts, setCasts] = useState([]);

useEffect(() => {
  const getMovc = async () => {
    try {
      const res = await clientAxios.get(`/castsofMovie/findmid/${slideCastMov}`, {
        headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setCasts(res);
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  }; getMovc();
},[]);



  return (
    <div className='slide'>
      <h2 className='slide__title'>CASTS OF MOVIE</h2>

      
      <Slider {...setting}>

      {casts.map((item, i) => (
              <SlideItem key={item._id} index={i} item={item}  />
            ))}

      </Slider>
    </div>
  )
}