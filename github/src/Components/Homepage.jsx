import React from 'react';
export const Homepage = () => {
  return (
    <div style={{marginTop:"20px",width:"100%"}}>
      <img src="https://imgs.search.brave.com/FO91p6UJiiSCfb_BF5ZJMwx-fNvqZoDGc63BZBnOD04/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS8x/MDIzOTMzMTAtMDc0/NzhiODAtM2Y4ZC0x/MWViLTg0ZWItMzky/ZDU1NWViZDI5LnBu/Zz9yZXNpemU9MTIw/MCw2MzA" alt="" />
      <div style={{width:"60%",margin:"auto"}}>
        <h1 style={{color:"white",fontSize:"60px",textAlign:"initial"}}>Let’s build from here</h1>
        <p style={{color:"white",fontSize:"30px",textAlign:"initial"}}>The AI-powered developer platform to build, scale, and deliver secure software.</p>
        <div style={{display:"flex",justifyContent:"space-between",width:"80%"}}>
          <div>
            <input style={{padding:"10px",fontSize:"20px",borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px",border:"none"}} placeholder='Email address' type="text" />
            <button style={{padding:"10px",fontSize:"20px",borderTopRightRadius:"5px",borderBottomRightRadius:"5px",border:"none",color:"White",backgroundColor:"#7C4DFF"}}>Signup for Github</button>
          </div>
          <button style={{padding:"10px 15px 10px 15px",marginBottom:"30px",fontSize:"20px",borderRadius:"5px",border:"1px solid #7C4DFF",color:"White",backgroundColor:"rgb(3, 3, 32)"}}>Start a free Enterprise Trail</button>
        </div>
      </div>
      <div style={{width:"80%",margin:"auto",marginTop:"30px"}}>
        <p style={{color:"grey",textAlign:"initial",width:"92%",margin:"auto",marginTop:"30px"}}>Trusted by the world’s leading organizations </p>
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
          <img src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg" alt="" />
          <img src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg" alt="" />
          <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="" />
          <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="" />
          <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="" />
          <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="" />
        </div>
      </div>
      <div>
      <h1 style={{color:"white",fontSize:"40px",marginTop:"100px"}}>The place for anyone from anywhere to build anything</h1>
      <p style={{color:"grey",fontSize:"20px",width:"50%",margin:"auto"}}>Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
        <div style={{marginTop:"30px"}}>
          <button style={{padding:"10px 15px 10px 15px",marginBottom:"30px",marginRight:"5px",fontSize:"20px",borderRadius:"5px",border:"1px solid #7C4DFF",color:"rgb(3, 3, 32)",backgroundColor:"rgb(255, 255, 255) 255)"}}>Signup for Github</button>
          <button style={{padding:"10px 15px 10px 15px",marginBottom:"30px",fontSize:"20px",borderRadius:"5px",border:"1px solid #7C4DFF",color:"White",backgroundColor:"rgb(3, 3, 32)"}}>Start a free Enterprise Trail</button>
        </div>
      </div>
    </div>
  )
}
