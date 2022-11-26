import React, {useEffect, useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import "./person.scss"
import clientAxios from '../../apis';

const Person = () => {
  const location = useLocation();
  console.log(location)
  const [person, setPerson] = useState({});

  useEffect(() => {
    const getMov = async () => {
      try {
        const res = await clientAxios.get(`/casts/find/${location.hash.substring(1)}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setPerson(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }

    }; getMov();
    
  },[]);
  return (
    <div className='person'>
        <NavBar/>
        <div className="person__container">
          <div className="person__left">
            <img 
            className='person__img'
            src= {person.img}
            />
          </div>

          <div className="person__right">
            <h2 className="person__name">Name: {person.name}</h2>
            <h3 className="person__desc">
              Biography: 
              <span> {person.desc}</span>
            </h3>

            <h3 className="person__desc">
              Country: 
              <span> {person.country}</span>
            </h3>
            
            <h3 className="person__desc">
              Birthday: 
              <span> {person.DOB&&person.DOB.substring(0,10)}</span>
            </h3>

            <h3 className="person__desc">
              Gender: 
              <span> {person.genre ? "Male" : "Female"} </span>
            </h3>


          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Person