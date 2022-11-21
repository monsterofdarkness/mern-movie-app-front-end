import React, {useEffect, useState} from 'react'
import './detail.scss'
import { Link, useLocation } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import clientAxios from '../../apis';
import Slide from '../../components/Slider/Slide';
import Comment from '../../components/Comment/Comment';


const Detail = () => {
  const location = useLocation();
  console.log(location)
  const [mov, setMov] = useState({});
  const [cmt, setCmt] = useState([]);

  useEffect(() => {
    const getMov = async () => {
      try {
        const res = await clientAxios.get(`/movies/find/${location.search.substring(1)}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMov(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }

    }; getMov();

    const getCmt = async () => {
      try {
        const res = await clientAxios.get(`/comments/findmovid/${location.search.substring(1)}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setCmt(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }

    }; getCmt();
    
  },[]);

  console.log(mov)
  console.log(cmt)

  return (
    <div className="detail">
      <NavBar />
    <div className="container__detail">

      <img className='detail__bg-img' src={mov.img}/>

      <div className="left">
        <img
        className="poster__img"
        src={mov.imgSm}
        />

        <div className="rating">
        <i className="ri-star-fill icon__start"></i>
        <i className="ri-star-fill icon__start"></i>
        <i className="ri-star-fill icon__start"></i>
        <i className="ri-star-fill icon__start"></i>
        <i className="ri-star-fill icon__start"></i>
        </div>
      </div>

      <div className="right">
        <h1 className="name">{mov.title}</h1>
        <h4 className="desc">Descript: <span>{mov.desc}</span></h4>
        <h4 className="limit">Limit age: <span>{mov.limit}+</span></h4>
        <h4 className="view">View: 2000 <i className="ri-eye-fill"></i></h4>

        <div className="buttons">
          <Link className='button__movie' to={{ pathname: "/watch", hash: mov.video,  }}>Watch Movie</Link>
          <Link className='button__trailer' to={{ pathname: "/watch", hash: mov.video,  }}>Watch Trailer</Link>
        </div>

        <div className="listCast">
        {
          mov._id&&<Slide slideCastMov={mov._id}/>
        }
        </div>

        <div className='bottom'>
          <form>
            <input type="text" placeholder="Your comment..." className='comment__input'/>
            <button>Send</button>
          </form>

          <div className="bottom__comments">
            <div className="comment__item">
              <h2 className='comment__item-auth'>John</h2>
              <span className='comment__item-content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, est. Voluptates amet, eum quo molestiae, temporibus dolorum fugiat enim a maiores molestias omnis aspernatur id perferendis? Excepturi sapiente nobis voluptates.</span>
              <span className='comment__item-time'>22 mins ago</span>
            </div>

            { mov._id && cmt.map((item, i) => (
              <Comment key={item._id} index={i} item={item}  />
            ))}
          </div>
        </div>

        
      </div>  
    </div>
    

    <Footer />
    </div>
  )
}

export default Detail