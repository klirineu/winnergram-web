import React, { useState } from "react";
import { Container } from "./styles";
import defaultImg from "../../../assets/person-circle.png";
import { IoCamera, IoAtOutline, IoPerson, IoCalendarClear } from "react-icons/io5";
import { Input } from "../../components/Input/Input";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import API from '../../lib/axios';
import ls from 'localstorage-slim';

const userconfig  = {
   username: ls.get('@wg_username'),
   userid: ls.get('@wg_userid'),
   usertoken: ls.get('@wg_usertoken')
}




export const Personal = () => {
   const navigate = useNavigate()
   const [responseLoad, setResponseLoad] = useState(false);
   
   const Alert = React.forwardRef((props, ref) => {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });

   const [state, openSnackbar] = React.useState({
      open: false,
      severity: 'success',
      message: 'This is a default message of snackbar'
   })
   const { open, severity, message} = state

   const [avatar, setAvatar] = useState(null)

   const handleClose = () => {
      openSnackbar({ ...state, open: false });
    };

    const [personalData, setPersonalData ] = useState({
       fname: '',
       lname: '',
       age: '',  
    });


    const handlePersonal = async () => {
      setResponseLoad(true)

       if (!personalData.fname || !personalData.lname || !personalData.age ) {
         openSnackbar({ open: true, severity: 'info', message: 'Parece que algum campo não foi digitado.' });
         return setResponseLoad(false)
       }
       if (!avatar) {
         openSnackbar({ open: true, severity: 'info', message: 'Você precisa selecionar uma imagem de profile.' });
         return setResponseLoad(false)
       }
       if(personalData.age > 100) {
         openSnackbar({open: true, severity: 'info', message: "Idade inválida"})
         return setResponseLoad(false)
       }

       const formData = new FormData();
       formData.append('image', avatar.target.files[0]);
       formData.append('fname', personalData.fname);
       formData.append('lname', personalData.lname);
       formData.append('age',   personalData.age);
      
      try {
         await API.post('/wg/users/personal/create-personal', formData);
         setResponseLoad(false);

         return window.location.href = '/me';
       } catch (e) {
         setResponseLoad(false);

         if (e.response.status === 401) {
            navigate('/login');
         }

         if (e.response.data.status) {
            setTimeout(() => { navigate('/me') }, 1000);
            return openSnackbar({ open: true, severity: 'warning', message: 'Está conta já possui um personal. Redirecionando' });
         }

         return openSnackbar({ open: true, severity: 'error', message: 'Erro ao atualizar o personal, tente novamente em breve.' });
         
      }
    }


	return (
   <>
   <Container>
      <header>
         <h2>Suas informações</h2>
         <div className="avatar">
            <label htmlFor="avatar" className="avatar--label">
               <img src={avatar ? URL.createObjectURL(avatar.target.files[0]) : defaultImg} alt="your avatar" />
               <IoCamera className="avatar--icon" />
            </label>
            <input type="file" id="avatar" onChange={(e) => setAvatar(e)} accept=".jpeg, .jpeg, .webp, .png" />
         </div>
      </header>
      <main>
         <div className="username">
            <h3>{userconfig.username}</h3>
            <IoAtOutline />
         </div>
         <div className="inputs">
            <Input 
            icon={<IoPerson />} 
            placeholder="Primeiro nome" 
            onChange={(e) => {
               setPersonalData({...personalData, fname: e.target.value})
            }}
            maxValue={10}
            />
            <Input 
            icon={<IoPerson />} 
            placeholder="Sobrenome"
            onChange={(e) => {
               setPersonalData({...personalData, lname: e.target.value})
            }}
            maxValue={10} 
            />
            <Input 
            icon={<IoCalendarClear />} 
            placeholder="Idade" 
            type="number"
            onChange={(e) => {
               setPersonalData({...personalData, age: e.target.value})
            }}
            maxValue={100}
            />
         </div>
         <button
            onClick={() => { handlePersonal() }}
            disabled={responseLoad ? "disabled" : ""}
         >
            {responseLoad ? <CircularProgress /> : "Finalizar"}
         </button>
      </main>
   </Container>
   <Snackbar open={open} autoHideDuration={3500} ContentProps={{ 'aria-describedby': 'message-id' }} onClose={handleClose}>
               <Alert severity={severity} sx={{ width: '100%' }}>
                  {message}
               </Alert>
   </Snackbar>
   </>
   );
};
