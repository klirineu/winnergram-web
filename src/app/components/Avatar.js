import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import settings from '../configs/settings.json';

export const Avatar = (props) => {
    const { className, username, load } = props


    return (
        <>
            {load ? <Skeleton width="40px" height="40px" variant='circular' /> : 
            <img 
                className={className} 
                src={`${settings.apiUrl}/wg/users/${username}/avatar`}
                alt="prof av"
            />
            }
        </>
    )
}