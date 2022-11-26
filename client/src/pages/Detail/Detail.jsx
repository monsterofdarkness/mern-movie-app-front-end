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
  const [direc, setDirec] = useState({})
  const [newcmt, setNewCmt] = useState("")


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
    
    const getDir = async () => {
      try {
        const res = await clientAxios.get(`/directors/find/${mov.director_id}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setDirec(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
  
    }; getDir();
    
    
  },[mov._id]);
  
  const handleChange = event => {
    setNewCmt(event.target.value);
  };

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
  };

  const addCmt = async (e) => {
    e.preventDefault();
    try {
      const res = await clientAxios.post(`/comments/`, 
          JSON.stringify({user_id: JSON.parse(localStorage.getItem("user"))._id ,movie_id: mov._id, content: newcmt}),
        {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            'Authorization' : 'Bearer'+JSON.parse(localStorage.getItem("user")).accessToken
            },
          },
      );
      getCmt();
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };
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

        <div className="infoleft">
          <h4 className="limit">Limit age: <span>{mov.limit}+</span></h4>
          <h4 className="view">View: {mov.view} <i className="ri-eye-fill"></i></h4>
        </div>

      </div>

      <div className="right">
        <h1 className="name">{mov.title}</h1>
        <h4 className="desc">Descript: <span>{mov.desc}</span></h4>
        <h4 className="view">Director: <Link to={{ pathname: "/persond", hash: direc._id}} className = 'link'>{direc.name}</Link></h4>

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
            <input type="text" placeholder="Your comment..." className='comment__input' onChange={handleChange}/>
            <button className='button_input' onClick={addCmt} >Send</button>
          </form>

          <div className="bottom__comments">
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