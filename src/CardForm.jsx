// eslint-disable-next-line no-unused-vars
import { use } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgURL: "",
    isVisited: true,
  });

  const handleInputChange = (e) => { // 'e' rappresenta l'input digitato dall'utente 
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value; // se il value type è booleano, quindi una checkbox, prendi check, se no prendi value
    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };
    addCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className="inputContainer">
      <label> Nome città</label>
      <input
        className="card"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label>Descrizione</label>
      <textarea
        className="card"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <label> Immagine </label>
      <input
        className="card"
        type="text"
        name="imgURL"
        value={formData.imgURL}
        onChange={handleInputChange}
      />

      <label> Visitata? </label>
      <input
        className="card"
        type="checkbox"
        name="isVisited"
        checked={formData.isVisited}
        onChange={handleInputChange}
      />

      <button type="submit" className="button">
        Aggiungi città!
      </button>
    </form>
  );
}

export default CardForm;
