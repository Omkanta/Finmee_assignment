import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid grey"}}>
        <div style={{width:"20%",flexDirection:"initial"}}><img style={{height:"45px"}} src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" alt="" /></div>
        <div style={{width:"50%",display:"flex",justifyContent:"space-evenly",padding:"10px"}}>
          <a style={{textDecoration:"none",fontSize:"20px"}} href="">Home</a>
          <a style={{textDecoration:"none",fontSize:"20px"}} href="">Industires</a>
          <a style={{textDecoration:"none",fontSize:"20px"}} href="">AI Software</a>
          <a style={{textDecoration:"none",fontSize:"20px"}} href="">Blog</a>
          <a style={{textDecoration:"none",fontSize:"20px"}} href="">Contact Us</a>
        </div>
      </div>
    </div>
  )
}
