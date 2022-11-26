import React from 'react'
import "./plan.scss"
import { useEffect, useState } from "react";
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import PlanItem from '../../components/PlanItem/PlanItem'
import clientAxios from '../../apis';

const Plan = () => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
  const getPlan = async () => {
    try {
      const res = await clientAxios.get(`/plans/`, {
        headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setPlan(res);
      console.log(res)
    } catch (err) {
      console.log(err);
    }

  }; getPlan();
  
  },[]);
  return (
    <div className='plan'>
        <NavBar />

        <div className="plan__container">
          <div className="listplan">
          { plan.map((item, i) => (
              <PlanItem key={i} index={i} item={item}  />
            ))}
          </div>

        </div>

        <Footer />
    </div>
  )
}

export default Plan