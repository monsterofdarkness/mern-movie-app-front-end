import React, {useEffect, useState} from 'react'
import "./comment.scss"
import clientAxios from '../../apis';
import ReadMoreReadLess from '../ReadMoreReadLess/ReadMoreReadLess';


const Comment = (item) => {
  const [userCmt, setUserCmt] = useState({});

  useEffect(() => {
    const getName = async () => {
      try {
        const res = await clientAxios.get(`/users/find/${item.item.user_id}`, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setUserCmt(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      }

    }; getName();
    
  },[]);

  console.log(userCmt)


  return (
    <div className="comment__item">
      <h2 className='comment__item-auth'>{userCmt.username}</h2>
      {
        item.item.content.length > 300 ?  <ReadMoreReadLess limit = {300}>{item.item.content}</ReadMoreReadLess> : <span>{item.item.content}</span>
      }
      
      <span className='comment__item-time'>Commented: {item.item.createdAt.substring(0,10)}</span>
  </div>
  )
}

export default Comment