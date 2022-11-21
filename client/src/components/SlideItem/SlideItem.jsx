import React, {useState, useEffect} from 'react'
import './slideItem.scss'
import clientAxios from '../../apis';
import avt from'../../assets/images/avt.jpg'
import { Link } from 'react-router-dom';

const SlideItem = (item) => {
  
  const [casts, setCasts] = useState({});

  useEffect(() => {
    const getMovc = async () => {
      try {
        const res = await clientAxios.get(`/casts/find/${item.item.cast_id}`, {
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

  console.log(item.item.cast_id);
  console.log(casts);

  return (
    <div className='SlideItem'>
      <Link to={{ pathname: "/person", hash: casts._id}} className = 'link'>
        <div className="SlideItem__img">
              <img
              className='SlideItem__img-img'
              src={casts.img}
              />
          </div>

          <div className="SlideItemInfo">
              <h3 className='SlideItemInfo__name'>{casts.name}</h3>
              <span className='SlideItemInfo__role'>{item.item.role}</span>
          </div>
      </Link>
    </div>
  )
}

export default SlideItem