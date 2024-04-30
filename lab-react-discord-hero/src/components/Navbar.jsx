

// las imagenes locales las tenemos que importar
//import dBackground from "../assets/discord-background.png"
import dLogo from  "../assets/discord-logo-white.png"
import mIcon from  "../assets/menu-icon.png"


function Navbar() {
  
    return (
        <section style={{backgroundColor: "black"}} >
        
        <img src= {dLogo} width= "50px" />
       
        <img src= {mIcon} width= "50px" /> 
    
        </section>
    )
  }
 
  export default Navbar