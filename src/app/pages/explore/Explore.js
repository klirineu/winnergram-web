import React, { useState, useEffect } from "react";
import {Container} from "./styles";
import {Header} from "../../components/header/Header";
import { IoMdSearch } from "react-icons/io";
import { Input } from '../../components/Input/Input';
import { Posts } from "./posts/Posts";
import { Friends } from "./friends/Friends";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

export const Explore = () => {
   const navigate = useNavigate()
   const [ searchData, setSearchData ] = useState('');
   const [tabBar, setTabBar] = useState()
   const location = useLocation()
   
   useEffect(() => {
      if(location.pathname.endsWith("/friends")){
         setTabBar(2)
      }else if(location.pathname.endsWith("/posts")){
         setTabBar(3)
      }
      // eslint-disable-next-line
   }, [])


   const handleProfiles = () => {
      setTabBar(2)
      navigate("friends")
   }
   // const handlePosts = () => {
   //    setTabBar(3)
   //    navigate("posts")
   // }

   const goBack = () => {
      navigate("/feed")
   }

	return (
      <Container>
         <Header title="Explore" handleBack={goBack} back={true} showBtns={true} />
         <div className='topExplore'>
            <div className='inputDiv'>
               <Input icon={<IoMdSearch />} onChange={(e) => { setSearchData(e.target.value)}} type='text' placeholder="Encontre perfis no wg" />
            </div>

            <div className='navigation'>
               <h3 onClick={handleProfiles} className={`${tabBar === 2 ? "active" : null}`}>Perfis</h3>
               <span className={`indicator id${tabBar}`}></span>
            </div>
         </div>

         <Routes>
            <Route path="/friends" element={<Friends search={searchData} />} />
            <Route path="/posts" element={<Posts />} />
         </Routes>


      </Container>
   );
};
