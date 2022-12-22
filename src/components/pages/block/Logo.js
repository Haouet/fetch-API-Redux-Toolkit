import React from 'react'
import logo from '../images/logo.png'
function Logo() {
  return (
    <div><img src={logo}   
    loading="lazy" alt="BigCo Inc. logo" /></div>
  )
}

export default Logo