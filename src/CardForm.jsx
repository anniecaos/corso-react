function CardForm({ addCity }) {
    
  const handleClick = () => {
    const city = {
      id: 8,
      title: "Roma",
      description: "La città eterna",
      imgURL:
        "https://plus.unsplash.com/premium_photo-1676391399721-87078f87da25?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    };
    addCity(city);
  };

  return (
    <div className="inputContainer">
      <input className="card" type="text" />
      <input className="card" type="text" />
      <input className="card" type="text" />
      <button onClick={handleClick} className="card">
        Aggiungi Card
      </button>
    </div>
  );
}

export default CardForm;
