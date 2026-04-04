import "./CharacterCard.css"

function CharacterCard({ character }) {
  if (!character || !character.name) return null

  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>Height: {character.height || "N/A"}</p>
      <p>Gender: {character.gender || "N/A"}</p>
    </div>
  )
}

export default CharacterCard