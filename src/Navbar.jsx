/*import "./App.css"; //si collega al file css principale o specifico del component
import Link from "./Link";
import "./Navbar.css";

function Navbar() {
    const x = 1; 
    const img = "vite"
    const imgStyle = {
        height: "100px", 
    }

  return (
    <>
   <div className={`box rounded ${x < 10 ? "rotated" : ""}`}> x = {x}</div>
        <img style={imgStyle} src={`/${img}.svg`} alt="" /> stile inline 
      <li>
        <Link>Homepage</Link>
        </li>
        <li>
        <Link>Negozio</Link>
        </li>
        <li>
        <Link>Chi siamo</Link>
        </li>
        <li>
        <Link>Contatti</Link>
        </li>
      
   
    </>
  );
}

export default Navbar;
// per poter utilizzare il componente bisogna aggiungere l'export*/
