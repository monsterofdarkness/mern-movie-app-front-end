import React from 'react'
import "./planItem.scss"

const PlanItem = (item) => {
  return (
    <div className='PlanItem'>
        <h2 className="plan__name">{item.item.type}</h2>
        <h4 className="plan__price">Monthly price: {item.item.charge} VND</h4>
        <h4 className="plan__resolution">Resolution: {item.item.Resolution}</h4>
        <button><span>CONTINUE</span></button>
    </div>
  )
}

export default PlanItem