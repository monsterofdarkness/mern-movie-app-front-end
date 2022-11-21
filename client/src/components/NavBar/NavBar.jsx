import { useContext, useState } from "react";
import './navbar.scss'
import { Link } from "react-router-dom";
import {getMovies} from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import avt from'../../assets/images/avt.jpg'
import logoweb from'../../assets/images/logoweb.png'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [keySearch, setKeySearch] = useState()
    const { isFetching, dispatch } = useContext(MovieContext);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await getMovies({ keySearch }, dispatch);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className='container'>
            <div className="left">
                <Link to="/" className="link">
                    <img className="logoweb"
                        src={logoweb}
                        alt=""
                    />                 
                </Link>

                <Link to="/home" className="link link_btn">
                    <span className="navbar__mainLinks">Homepage</span>                    
                </Link>

                <Link to="/series" className="link link_btn">
                    <span className="navbar__mainLinks">Series</span>                    
                </Link>

                <Link to="/movies" className="link link_btn">
                    <span className="navbar__mainLinks">Movies</span>
                </Link>

                <Link to="/home" className="link link_btn">
                    <span className="navbar__mainLinks">New and Popular</span>
                </Link>

                <Link to="/home" className="link link_btn">
                    <span className="navbar__mainLinks">My List</span>
                </Link>
            </div>
            <div className="right">
                <input className="search" type="text" placeholder="Search..."></input>
                <span className="icon icon__search" onClick={handleSearch}><i className="ri-search-line"></i></span>
                <span>PHONG</span>
                <span className="icon"><i className="ri-notification-line"></i></span>
                 <img
                    src={avt}
                    alt=""
                />
                <div className="profile">
                    <span className="icon"><i className="ri-arrow-drop-down-line"></i></span>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>         
        </div>
    </div>
  )
}

export default NavBar