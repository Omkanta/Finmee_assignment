import React from 'react'
import {AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai"
export const Footer = () => {
  return (
    <div style={{backgroundColor:"#020835",paddingBottom:"20px"}}>
        <div style={{margin:"auto",paddingTop:"20px"}}>
            <img style={{height:"55px"}} src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",width:"40%"}}>
            <p style={{color:"white"}}>Home</p>
            <p style={{color:"white"}}>About Us</p>
            <p style={{color:"white"}}>Contact Us</p>
            <p style={{color:"white"}}>Privacy Policy</p>
            <p style={{color:"white"}}>Sitemap</p>
        </div>
        <p style={{color:"grey"}}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto",width:"10%"}}>
            <AiOutlineTwitter size={"30px"} color='white'/>
            <AiFillLinkedin  size={"30px"} color='white'/>
        </div>
        <p style={{color:"grey"}}>© 2022. Ntwist Inc.</p>
    </div>
  )
}
