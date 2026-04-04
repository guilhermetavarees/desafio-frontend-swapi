import { useEffect, useState } from "react"
import CharacterList from "./components/CharacterList.jsx"

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
      <CharacterList characters={characters} />
    </div>
  )
}

export default App