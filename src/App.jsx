import './App.css'
import { useEffect, useState } from "react"

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/people/")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error))
  }, [])
  console.log(characters)
  return (
    <>
      <div className="container">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <div key={character.url}>
              <h2>{character.name}</h2>
              <p>Height: {character.height}</p>
              <p>Gender: {character.gender}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default App
