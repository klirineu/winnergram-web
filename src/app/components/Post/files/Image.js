import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import settings from '../../../configs/settings.json';

export const Image = (props) => {
    const { className, id, load, alt } = props


    return (
        <>
            {load ? <Skeleton width="100%" style={{borderRadius: '25px'}} height="200px" variant='wave' /> : 
            <img 
                className={className} 
                src={`${settings.apiUrl}/wg/social/feed/post/${id}/image`}
                alt={alt}
            />
            }
        </>
    )
}