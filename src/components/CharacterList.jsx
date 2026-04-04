import CharacterCard from "./CharacterCard"

function CharacterList({ characters, loading }) {
  return (
    <div className={`character-list${loading ? " loading" : ""}`}>
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  )
}

export default CharacterList