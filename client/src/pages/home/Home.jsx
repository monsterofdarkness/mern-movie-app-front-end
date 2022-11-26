import React from 'react'
import { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet"
import NavBar from '../../components/NavBar/NavBar'
import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import './home.scss'
import List from '../../components/List/List'
import clientAxios from '../../apis';
import MyList from '../../components/MyList/MyList';
 

const Home = ({type}) => {
const [lists, setLists] = useState([]);
const [genre, setGenre] = useState(null);
  console.log(lists)
  useEffect(() => {

    const getRamdomLists = async ()=>{
      try {
        const data = await clientAxios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
        {
          headers: {
            "token":
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      setLists(data)
      }catch(err){
        console.log(err)
      }
    };
    getRamdomLists();
  }, [type, genre]);

  return (
    <Helmet title= {"Home" + " - " + type }>
      <div className='home'>
        <NavBar/>
        <Featured type={type} setGenre={setGenre}/>
        <MyList />
        {lists?.length && lists.map((list, index) => (
          <List list={list} key={index}/>
        ))}
        <Footer/>
      </div>
    </Helmet>
  )
}

export default Home