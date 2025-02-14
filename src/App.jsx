import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import './Navbar.jsx'
//import Navbar from './Navbar.jsx'
import Card from "./Card.jsx";
import CardForm from "./CardForm.jsx";

function handleClick() {
  alert("prova alert");
}

function handleChange(e) {
  console.log(e.target.value);
}
function App() {
  const [count, setCount] = useState(0);

  const [cities, setCities] = useState([
    {
      id: 0,
      title: "Torino",
      description: "La città Sabauda",
      imgURL:
        "https://images.unsplash.com/photo-1610651219730-6b580d616e72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      title: "Milano",
      description: "La città della moda e dell'impresa",
      imgURL:
        "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 2,
      title: "Venezia",
      description: "La città più bella d'Italia, PUNTO",
      imgURL:
        "https://images.unsplash.com/photo-1545157000-85f257f7b040?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      title: "Aosta",
      description: "Lorem ipsum, dolor sit amet consectetur.",
      imgURL:
        "https://images.unsplash.com/photo-1584725489356-440a9fdfc978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
    {
      id: 4,
      title: "Trento",
      description: "Immersa nella natura",
      imgURL:
        "https://www.visittrentino.info/assets-database/36000-36999/36700-36799/1476418/image-thumb__1476418__ogimages/valle-dell-adige---trento---piazza-duomo_36778.jpg",
      isVisited: true,
    },
    {
      id: 5,
      title: "Trieste",
      description: "Gioiello sul mare",
      imgURL:
        "https://martinaway.com/wp-content/uploads/2019/06/Curiosita-su-Trieste.jpg",
      isVisited: false,
    },
    {
      id: 6,
      title: "Bologna",
      description: "Culla dell'università",
      imgURL:
        "https://hips.hearstapps.com/hmg-prod/images/bologna-01-1531212414.jpg",
      isVisited: true,
    },
    {
      id: 7,
      title: "Firenze",
      description: "Immergiti nell'arte rinascimentale",
      imgURL:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false,
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      ;
      <div className="cardsContainer">
        <CardForm addCity={addCity}>cardform</CardForm>
      </div>
      <div className="cardsContainer">
        {cities
          /* .filter((city) => city.isVisited) */
          .map((city) => (
            <Card
              imgURL={city.imgURL}
              key={city.id}
              title={city.title}
              isVisited={city.isVisited}
              description={city.description}
            ></Card>
          ))}
      </div>
      {/*  <div className="cardsContainer"> {/* Gruppo di card che viene effettivamente renderizzato
        <Card
          isVisited={false}
          title="Firenze"
          description="Tutta l'arte di cui hai bisogno"
          imgURL="https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card
          isVisited={true}
          title="Venezia"
          description="La città sull'acqua"
          imgURL="https://images.unsplash.com/photo-1545157000-85f257f7b040?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card
          isVisited={true}
          title="Torino"
          description="Immergiti nella città sabauda"
          imgURL="https://images.unsplash.com/photo-1610651219730-6b580d616e72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
      </div> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>ALERT </button>
        <button> FILTRA </button>
        <input type="text" onChange={handleChange} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
