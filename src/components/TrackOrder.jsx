import React from 'react'
import FooterSection from './FooterSection'
import NavBar from './NavBar'

const TrackOrder = ({cart}) => {
  return (
    <>
    <NavBar cart={cart}/>
    <h1 style={{Font: "32px", margin: "100px", textAlign: "center"}}>
      Track Your Order
    </h1>
    <FooterSection />
    </>
  )
}




export default TrackOrder
