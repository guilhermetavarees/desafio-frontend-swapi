import { useEffect, useState } from "react"

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch("https://swapi.py4e.com/api/people/")
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => {
        console.error(error)
        setError("Failed to load characters")
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="container">
        <p>Loading characters...</p>
        <div className="spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container">
      {characters.map((character) => (
        <div key={character.url}>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  )
}

export default App