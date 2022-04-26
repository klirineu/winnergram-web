import { Switch } from '@mui/material';
import React from 'react';
import { MdVerified } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Skeleton from '@mui/material/Skeleton';
import useUser from '../../hooks/useUser';
import ls from 'localstorage-slim';
import { useNavigate } from 'react-router-dom';

const userconfig  = {
   username: ls.get('@wg_username'),
   userid: ls.get('@wg_userid'),
   usertoken: ls.get('@wg_usertoken')
 }

export const Infos = (data) => {
   const navigate = useNavigate();

   const { user, isValidating, isError } = useUser(userconfig.username)
   const { email, Personal } = user

   if (isError) {
		navigate('/login');
	}	


   if (!user) return null

   return (
      <main className='infos'>
         <h2>Informações pessoais</h2>

         <div className='bio'><p>Frase motivacional</p> <FaPen /></div>

         <div>
            <ul>
               <li>Verificado</li>  
               <li><MdVerified className='iconVerified' /></li>
            </ul>
            <ul>
               <li>Nome</li>
               <li>
               {isValidating ? 
								<Skeleton width={100} height={20} animation="wave" /> 
				   : `${Personal.fname} ${Personal.lname}`}
               </li>
            </ul>
            <ul>
               <li>Email</li>
               <li>
               {isValidating ? 
								<Skeleton width={100} height={20} animation="wave" /> 
				   : email}
               </li>
            </ul>
            <ul>
               <li>Senha</li>
               <li>Alterar</li>
               {/* add dropdwon? */}
            </ul>
         </div>

         <h2>Notificações</h2>

         <div>
            <ul>
               <li>Geral</li>
               <li><Switch defaultChecked={true} className="switchBtn" /></li>
            </ul>
            <ul>
               <li>Curtidas</li>
               <li><Switch defaultChecked={true} className="switchBtn" /></li>
            </ul>
            <ul>
               <li>Comentários</li>
               <li><Switch defaultChecked={true} className="switchBtn" /></li>
            </ul>
            <ul>
               <li>Seguidores</li>
               <li><Switch defaultChecked={true} className="switchBtn" /></li>
            </ul>
         </div>
      </main>
   )
}