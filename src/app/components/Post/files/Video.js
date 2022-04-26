import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import settings from '../../../configs/settings.json';

export const Video = (props) => {
    const { className, id, load, alt } = props


    return (
        <>
            {load ? <Skeleton width="100%" style={{borderRadius: '25px'}} height="200px" variant='wave' /> : 
            <video autoPlay muted width="100%" max-height="200px" height="200px" controls style={{borderRadius: '25px'}}>
                <source 
                className={className} 
                src={`${settings.apiUrl}/wg/social/feed/post/${id}/video`}
                alt={alt}
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            }
        </>
    )
}