import React from 'react'
import "./CharacterList.css"
import { useCharacters } from './hooks/useCharacters';


export default function CharactersList() {

    const {error,loading,data}=useCharacters();
    if(loading)return <div>jj</div>;
    if(error)return <div>ll</div>
  return (
    <div className="CharacterList">
      {data.characters.results.map(character=>{
        return (<div>
        <img src={character.image} alt='r'/>
        <h1>{character.name}</h1>
      </div>);})}
    </div>
  )
}
