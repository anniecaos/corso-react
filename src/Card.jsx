import PropTypes from "prop-types";

function Card({id, imgURL, title, isVisited, description}) {

    /*const imgURL = props.imgURL
    const title = props.title 
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, repudiandae."*/


  return (
    
       
      <div className="card">
      <img className="imageStyle" src= {imgURL} alt=""/>
        <div className="texts">
        <p>{id}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        
         {isVisited ? <span>visitata</span>: <span>non visitata</span> } 
      </div>
      </div>
   
  );
}

Card.propTypes = {

  id: PropTypes.number.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isVisited: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired

}; 

 
export default Card;

