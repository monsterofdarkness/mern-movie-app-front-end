import "./featured.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import clientAxios from '../../apis';

export default function Featured({ type, setGenre }) {

  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await clientAxios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2Q4ODc5NjVjZTRhMjM3ZWIyMjU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE1ODIyNiwiZXhwIjoxNjY4NTkwMjI2fQ.rBioJHMaRCrbZmLGpjjmmuZ6ZSgyoKhbxUrHObZHrwg"
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log(content);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc"> {content.desc} </span>
        <div className="buttons">
          <button className="play">
            <Link className='link' to={{ pathname: "/watch", hash: content.video,  }}>
              <span><i className="ri-play-list-2-fill"></i></span>
              <span>Play</span>
            </Link>

          </button>
          <button className="more">
          <Link className='link' to={{ pathname: "/detail", search: content._id }}>
            <span><i className="ri-information-line"></i></span>
            <span>Info</span>            
          </Link>

          </button>
        </div>
      </div>
    </div>
  );
}