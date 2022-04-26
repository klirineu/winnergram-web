import React from 'react';
import { Container } from './styles';

import resultImg1 from "../../../../assets/explore1.png"
import resultImg3 from "../../../../assets/explore3.png"
import resultImg4 from "../../../../assets/explore4.png"

export const Posts = () => {
  return (
     <Container>
      <div className="containerResults">
         <div className="bottomPhotoLeft">
            <img src={resultImg3} alt="img1" />
         </div>

         <div className="bottomPhotoRight1">
            <img src={resultImg4} alt="img2" />
         </div>

         <div className="bottomPhotoRight2">
            <img src={resultImg4} alt="img3" />
         </div>

         <div className="topPhotoLeft">
            <img src={resultImg3} alt="img4" />
         </div>

         <div className="topPhotoRight1">
            <img src={resultImg4} alt="img5" />
         </div>

         <div className="topPhotoRight2">
            <img src={resultImg4} alt="img6" />
         </div>

         <div className="middlePhoto">
            <img src={resultImg1} alt="img7" />
         </div>
      </div>
     </Container>
  );
}