import { useEffect, useState } from "react"
import CharacterList from "./components/CharacterList.jsx"

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [url, setUrl] = useState("https://swapi.py4e.com/api/people/")
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setNextPage(data.next)
        setPrevPage(data.previous)
      })
      .finally(() => setLoading(false))
  }, [url])

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

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="container">

      <input
        type="text"
        placeholder="Search character..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CharacterList characters={filteredCharacters} />

      <div className="buttons">
        <button
          onClick={() => setUrl(prevPage)}
          disabled={!prevPage}
        >
          Previous
        </button>

        <button
          onClick={() => setUrl(nextPage)}
          disabled={!nextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App