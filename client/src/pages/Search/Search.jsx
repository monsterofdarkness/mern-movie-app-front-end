import React, {useState, useEffect} from 'react'
import "./search.scss"
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SearchItem from '../../components/SearchItem/SearchItem'
import clientAxios from '../../apis';

const Search = (title) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {

        const getMov = async ()=>{
          try {
            const data = await clientAxios.get(
              `lists${title ? "?title=" + title : ""}${
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
        getMov();
      }, [title, genre]);
  return (
    <div className='search'>
        {/* <NavBar /> */}

        <div className="search__container">
        {lists?.length && lists.map((item, index) => (
          <SearchItem item={item} key={index}/>
        ))}
        </div>

        <Footer />
    </div>
  )
}

export default Search