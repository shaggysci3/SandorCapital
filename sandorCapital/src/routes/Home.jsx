import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () =>{
 

 
   

    return(
      <>
      <div className="homePage">
        <div className="imgBlock">

        <div>
        <h3>our investment strategy</h3>
        <h1 style={{color:"black"}}>this is the home page of this Sandor Capital website</h1>
        <p>welcome to the number one site for not doing anything in investment banking we are unrivaled in our ability to do nothing with your money we will not invest it and only lose you money</p>
        </div>
        <img className="blockImg" src="https://th.bing.com/th/id/OIG3.9Sh1ygKJPljDur2gcROY?pid=ImgGn"></img>
        </div>
        <div className="blockCard">
          <div className="cardContainer">
              <div className="myCard">
                <h3>card 1</h3>
                <p>here at card one we pride ourself on how much we love the number 1 as in we wont be making you a single dollar.</p>
              </div>
              <div className="myCard">
                <h3>card 2</h3>
              </div>
              <div className="myCard">
                <h3>card 3</h3>
              </div>
              
          </div>

        </div>
        
      </div>
        
      </>
    )
  }
  export default Home