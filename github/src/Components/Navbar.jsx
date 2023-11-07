import React from 'react'
import {AiFillGithub} from "react-icons/ai"
export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{display:"flex",justifyContent:"space-evenly",width:"40%",padding:"10px"}}>
      <AiFillGithub color='white' size={'30px'} />
      <a style={{color:"white",textDecoration:"none"}} href="">Product</a>
      <a style={{color:"white",textDecoration:"none"}} href="">Solutions</a>
      <a style={{color:"white",textDecoration:"none"}} href="">Open Source</a>
      <a style={{color:"white",textDecoration:"none"}} href="">Pricing</a>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly",width:"25%",alignContent:"center"}} >
        <input
         style={{backgroundColor:"rgb(3, 3, 32)",
         color:"white",borderBlockColor:"grey",
         padding:"8px 35px 8px 8px",alignSelf:"center",marginTop:"5px",
        borderRadius:"5px"}}
          placeholder='Search or jump to..' type="text"/>
          <div>         
             <button style={{backgroundColor:"rgb(3, 3, 32)",padding:"8px",marginTop:"7px",borderRadius:"5px", color:"white", border:"none"}} >Sign in</button>
          </div>
          <div>
            <button style={{backgroundColor:"rgb(3, 3, 32)",padding:"8px",borderRadius:"5px",marginTop:"7px", color:"white", borderColor:"white"}} >Sign up</button>
          </div>
      </div>
    </div>
  )
}
