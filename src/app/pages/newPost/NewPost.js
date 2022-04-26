import React, { useState } from 'react';
import { Container } from './styles';
import { IoIosCamera, IoIosVideocam, IoMdClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiOutlineHashtag } from "react-icons/hi";
import { File, Input, Textarea } from '../../components/Input/Input';
import { Header } from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import API from '../../lib/axios';
import { Alert, Snackbar } from '@mui/material';
import { useEffect } from 'react';



export const NewPost = () => {
   const [upload, setUpload] = useState(null);
   const [showUpload, setShowUpload] = useState(false);
   const [uploadType, setUploadType] = useState("text");
   const navigate = useNavigate();
   const [responseLoad, setResponseLoad ] = useState(false)

   const [hashtagInput, setHashtagInput] = useState("")
   const [renderHashtags, setRenderHashtags] = useState([])

   const [warningAlert, setWarning] = useState(false)
   const [errorAlert, setError] = useState(false)
   const [warningContent, setWarningContent] = useState("")

   const closeError = () => {
      setError(false)
   }
   const closeWarning = () => {
      setWarning(false)
   }
   const [ postData , setPostData ] = useState({
      content:  '',
      file: '',
      hashtags: [],
      isImage: 'false',
      isVideo: 'false'
   });

   const goBack = () => {
      navigate(-1)
   };

   const handleHashtags = (e) => {
      let newHashtag = hashtagInput
      if(e.key === "Enter" || e.key === " "){
         if(hashtagInput.startsWith(" ")){
           newHashtag = hashtagInput.trim()
         }
         if(newHashtag.startsWith("#")){
            newHashtag = newHashtag.replace("#", "")
         }
         if(newHashtag.length > 0){
            e.preventDefault()
            setRenderHashtags([
               ...renderHashtags,
               newHashtag
            ])
            setHashtagInput("")
         }
      }
   }

   useEffect(() => {
      setPostData({
         ...postData,
         hashtags: renderHashtags,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [renderHashtags])

   const handleRemoveHashtag = (id) => {
      setRenderHashtags((itens) => {
         return itens.filter((item, index) => id !== index)
      })
   }


   const uploadPhoto = async () => {
      setResponseLoad(true);
      const postFormData = new FormData();
      postFormData.append('content', postData.content);
   
     for (var i = 0; i < postData.hashtags.length; i++) {
         postFormData.append('hashtags', postData.hashtags[i]);
     }

      postFormData.append('image', upload);
      postFormData.append('isImage', true);
      postFormData.append('isVideo', false);

      try {         
         await API.post('/wg/social/feed/post/create-newpost/image', postFormData);
         
         setResponseLoad(false);
         return navigate('/feed');
      } catch (e) {
         if (e.response.status === 401) {
            navigate('/login');
         }
         
         setResponseLoad(false);
         setError(true) // Adicionar snackbar de erro.
      }
   };

   const uploadVideo = async () => {
      setResponseLoad(true);
      const postFormData = new FormData();
      postFormData.append('content', postData.content);

      for (var i = 0; i < postData.hashtags.length; i++) {
         postFormData.append('hashtags', postData.hashtags[i]);
      }
      
      postFormData.append('video', upload);
      postFormData.append('isImage', false);
      postFormData.append('isVideo', true);
      try {         
         await API.post('/wg/social/feed/post/create-newpost/video', postFormData);
         
         setResponseLoad(false);
         return navigate('/feed');
      } catch (e) {
         if (e.response.status === 401) {
            navigate('/login');
         } 
         setResponseLoad(false);
         setError(true) // Adicionar snackbar de erro.
      }
   };



   const uploadText = async () => {
      setResponseLoad(true);
      try {         
         await API.post('/wg/social/feed/post/create-newpost', postData);
         
         setResponseLoad(false);
         return navigate('/feed');
      } catch (e) {
         if (e.response.status === 401) {
            navigate('/login');
         }

         setResponseLoad(false);
         setError(true) // Adicionar snackbar de erro.
      }
   };


   const handle = () => {
      if(postData.content || upload){
         // eslint-disable-next-line default-case
      switch (uploadType) {
         case 'photo':
            uploadPhoto()
         break;
         case 'text':
            uploadText()
         break;
         case 'video':
            uploadVideo()
      }
      }else{
         setWarningContent("Parece que algum campo não foi digitado.")
         setWarning(true) // Adicionar snackbar de aviso.
      }
   }

   

   const handlePhoto = (e) => {
      if(e.target.files[0].size > 1572864){
         console.log("mt grande amg")
         setWarningContent("Limite de arquivo excedido")
         setWarning(true)
      }else{
         setUploadType("photo")
         setUpload(e.target.files[0])
         setShowUpload(true)
      }
   };

   const handleVideo = (e) => {
      if(e.target.files[0].size > 67108864){
         console.log("mt grande amg")
         setWarningContent("Limite de arquivo excedido")
         setWarning(true)
      }else{
         console.log(e)
         setUploadType("video")
         setUpload(e.target.files[0])
         setShowUpload(true)
      }
   };

   const handleRemovePreview = () => {
      setUploadType("text")
      setUpload(null)
      setShowUpload(false)
   };
   
  return (
  <Container>
     <Snackbar open={errorAlert} autoHideDuration={3000} onClose={closeError}>
         <Alert severity="error" variant='filled' sx={{ width: '100%' }}>
            Tente novamente mais tarde!
         </Alert>
      </Snackbar>
     <Snackbar open={warningAlert} autoHideDuration={3000} onClose={closeWarning}>
         <Alert severity="warning" variant='filled' sx={{ width: '100%' }}>
            {warningContent}
         </Alert>
      </Snackbar>
     <Header title="Novo Post" handleBack={goBack} back={true} />
      <main>
         <div className="resumo">
            <label htmlFor="">Resumo</label>
            <Textarea onChange={(e) => {
               setPostData({...postData, content: e.target.value })
            }} placeholder="No que você está pensando hoje?" rows={3} />
         </div>

         <div className="hashtags">
            <Input icon={<HiOutlineHashtag />} value={hashtagInput} onChange={(e) =>  setHashtagInput(e.target.value)} onKeyPress={(e) => handleHashtags(e)} placeholder="Hashtags" />
            {renderHashtags.length ? 
            <div className='hashtags--itens'>
               {renderHashtags.map((item, index) => {
                  return <span key={index}>#{item} <IoClose onClick={() => handleRemoveHashtag(index)} /> </span>
               })}
            </div>
            : null}
         </div>

         <div className="uploads">
            <File onChange={handlePhoto} id="photo" icon={<IoIosCamera />} placeholder="Foto" accept="image" />
            <File onChange={handleVideo} id="video" icon={<IoIosVideocam />} placeholder="Video" accept="video" />
         </div>

         {showUpload && 
         <div className="preview">

            {uploadType === "photo" ? 
            <img src={URL.createObjectURL(upload)} alt="your selected media" />
            :
            <video controls>
               <source src={URL.createObjectURL(upload)} type="video/mp4" />
               this app does not support the video preview.
            </video>
            }
            
            <span className='preview--close' onClick={handleRemovePreview}><IoMdClose /></span>
         </div>
         }
   
         <Button
            className='primaryBtn' 
            // onClick={() => setError(true)}
            onClick={() => { handle () }}
            disabled={responseLoad ? true : false}
         >
            {responseLoad ? <CircularProgress /> : "Criar Novo Post"}
         </Button>
      </main>
  </Container>
  )
};