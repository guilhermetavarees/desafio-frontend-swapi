import { useEffect, useState } from "react"
import CharacterList from "./components/CharacterList.jsx"
import "./App.css"

const API_BASE_URL = "https://swapi.py4e.com/api/people/"

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [url, setUrl] = useState(API_BASE_URL)
  const [nextPage, setNextPage] = useState(null)
  const [prevPage, setPrevPage] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar personagens")
        return res.json()
      })
      .then((data) => {
        setCharacters(data.results)
        setNextPage(data.next)
        setPrevPage(data.previous)
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [url])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <div className="top-row">
        <input
          type="text"
          placeholder="Search character..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search characters"
        />
        <div className="status-row" aria-live="polite">
          {loading && <span className="loading-badge">Atualizando dados...</span>}
          {!loading && error && <span className="error">{error}</span>}
        </div>
      </div>

      <CharacterList loading={loading} characters={filteredCharacters} />

      <div className="buttons">
        <button onClick={() => setUrl(prevPage)} disabled={!prevPage || loading}>
          Previous
        </button>
        <button onClick={() => setUrl(nextPage)} disabled={!nextPage || loading}>
          Next
        </button>
      </div>

      <div className={`loading-overlay ${loading && characters.length > 0 ? "visible" : ""}`} />
      {loading && characters.length === 0 && (
        <div className="empty-state">
          <span>Carregando personagens...</span>
        </div>
      )}
    </div>
  )
}

export default App