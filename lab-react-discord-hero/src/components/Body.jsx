

function Body(){
const bodystyles={
    backgroundColor: "black",
    color: "white",
    backgroundimage:"./assets/discord-background",
}

  return (
    <body style={bodystyles}>
    <button id="button" >Dowload format</button>   
    <button id="button">Open discord in your browser</button> 
 
    <img src="./assets/discord-background"></img>  
    </body>
  )
}


export default Body