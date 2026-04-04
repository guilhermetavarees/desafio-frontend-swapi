import CharacterCard from "./CharacterCard"

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  )
}

export default CharacterList