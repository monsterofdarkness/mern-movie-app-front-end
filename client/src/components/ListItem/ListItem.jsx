import React  from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './listitem.scss'
import clientAxios from '../../apis';


export default function ListItem({index, item}){

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [myListUp, setMyListUp] = useState([]);


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await clientAxios.get("/movies/find/" + item, {
          headers: {
            token:
            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2Q4ODc5NjVjZTRhMjM3ZWIyMjU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE1ODIyNiwiZXhwIjoxNjY4NTkwMjI2fQ.rBioJHMaRCrbZmLGpjjmmuZ6ZSgyoKhbxUrHObZHrwg"
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            
          },
        });
        setMovie(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();

        const getMovc = async () => {
      try {
        const res = await clientAxios.get(`/myMoviesList/finduid/${JSON.parse(localStorage.getItem("user"))._id}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMyListUp(res.content);
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    }; getMovc();
  }, [item]);

  console.log(myListUp)
  const addMylist = async (e) => {
    setMyListUp([...myListUp, movie._id])
    e.preventDefault();
    
    try {
      
      console.log(myListUp)
      const res = await clientAxios.put(`/myMoviesList/finduid/${JSON.parse(localStorage.getItem("user"))._id}`, 
            {'content': JSON.parse(myListUp)},
        {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            'Authorization' : 'Bearer'+JSON.parse(localStorage.getItem("user")).accessToken
            },
          },
      );
      console.log(res)
    } catch (err) {
      console.log(err);
    }
  };

  


  console.log("movie", movie)

  return (
    // <Link to={{ pathname: "/watch", hash: movie.video,  }}  >
      <div 
      className='listItem'
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
      onMouseEnter = {() => setIsHovered(true)}
      >
          <img
          className='item__img'
          src={ movie.img }
          alt=""
          />
          {isHovered && (
            <>
              <video src={ movie.trailer} autoPlay loop muted/>
              <div className='item__info'>
                <div className='icons'>
                <Link className='link' to={{ pathname: "/watch", hash: movie.video,  }}> <i className="ri-play-circle-fill icon"></i> </Link>  
                <Link className='link' to={{ pathname: "/detail",  search: movie._id,  }}> <i className="ri-information-fill icon"></i> </Link>  
                <span> <i className="ri-heart-fill icon" onClick={addMylist}></i> </span>  
                <Link className='link' to={{ pathname: "/watch", hash: movie.video,  }}> <i className="ri-dislike-fill icon"></i>  </Link>  
                </div>

                <div className='item_infotop'>
                  <span>{movie.duration}</span>
                  <span className='limit'>{ movie.limit }+</span>
                  <span>{ movie.year }</span>
                </div>

                <div className='title'>
                  { movie.title }
                </div>

                <div className='genre'>
                  { movie.genre }
                </div>

                <div className='desc'>
                  { movie.desc }
                </div>
              </div>
            </>
          )}
      </div>
    // </Link>
  )
}