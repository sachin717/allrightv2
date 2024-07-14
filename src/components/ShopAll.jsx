import React from 'react'
import NavBar from './NavBar'
import Suggestions from './Suggestions'
import FooterSection from './FooterSection'

const ShopAll = ({cart}) => {
  return (
    <>
    <NavBar cart={cart}/>
    <Suggestions/>
    <FooterSection/>
    </>
  )
}

export default ShopAll
