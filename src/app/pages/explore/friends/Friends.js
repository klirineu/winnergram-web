/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { UserName, Name } from '../../../components/FriendsResults/friends';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';
import {  Avatar } from '../../../components/Avatar';
import API from '../../../lib/axios';
import { userconfig } from '../../../configs/userconfig';

export const Friends = (props) => {
   const { search } = props;
   const navigate = useNavigate();
   const [profiles, setProfiles] = useState([]);


   useEffect(async () => {
      try {
         const { data } = await API.get('/wg/users');
         
         return setProfiles(data);
         } catch (error) {
         return navigate('/feed');
      }
   }, [])




  return (
     <Container>
         {profiles.filter(profile => profile.username.startsWith(search) && profile.username !== userconfig.username ).map(prof => (
            <Link to={`/me/${prof.username}`} key={prof.id}>
                     <div className='user'>
                     <div className='userInfos'>
                        <div>
                        <Avatar load={false} className="userAvatar" username={prof.username} alt="Profile" />

                        </div>
                        <div>
                           <UserName userName={'@' + prof.username} />
                           <Name name={prof.Personal.fname + ' ' + prof.Personal.lname} />
                        </div>
         
                     </div>
         
                     <IoIosArrowForward />
                  </div>
            </Link>
         ))}
     </Container>
  );
}