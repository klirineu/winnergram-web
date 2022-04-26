import React from 'react'
import { Outlet } from 'react-router-dom'
import { BottomMenu } from './BottomMenu'

export default function WithMenu() {
   return (
      <>
         <Outlet />
         <BottomMenu />
      </>
   )
}