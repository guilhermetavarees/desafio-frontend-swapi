function CharacterCard({ character }) {
  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
    </div>
  )
}

export default CharacterCard