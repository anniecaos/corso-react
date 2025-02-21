import { use } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgURL: "",
    isVisited: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue
    })
  };

  const handleSubmit = () => {
    const city = {
      id: Math.random(),
      title: formData.title,
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
        name="title"
        value={formData.title}
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

      <button onClick={handleSubmit} className="button">
        Aggiungi città!
      </button>
    </form>
  );
}

export default CardForm;
