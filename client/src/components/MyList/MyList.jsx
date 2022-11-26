import React from 'react'
import { useRef, useState,useEffect } from "react";
import './myList.scss'
import clientAxios from '../../apis';
import TrendItem from '../TrendItem/TrenItem';

export default function MyList() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [myList, setMyList] = useState({})

  console.log(myList)


  useEffect(() => {
    const getMovc = async () => {
      try {
        const res = await clientAxios.get(`/myMoviesList/finduid/${JSON.parse(localStorage.getItem("user"))._id}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMyList(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    }; getMovc();
  },[]);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">My list <i className="ri-user-heart-fill"></i></span>
      <div className="wrapper">
        <i
          className="ri-arrow-left-s-line sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}>
        </i>
        <div className="container" ref={listRef}>
          {myList?.content && myList.content.map((item, i) => (
              <TrendItem key={i} index={i} item={item} mlid={myList._id}/>
            ))}
        </div>
        <i
          className="ri-arrow-right-s-line sliderArrow right"
          onClick={() => handleClick("right")}>
        </i>
      </div>
    </div>
  );
}
