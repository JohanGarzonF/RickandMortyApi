import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {
  
  const character = useCharacterApi(resident)

  return (
    <article className='card_character'>
      <div className='face'>
        <h2 className='mg-b20'>{character?.name}</h2>
        <ul>
          <li className='mg-b10 font-bold'><span className='font-ligth'>Status: </span><br/>{character?.status}</li>
          <li className='mg-b10 font-bold'><span className='font-ligth'>Origin: </span><br/>{character?.origin.name}</li>
          <li className='mg-b10 font-bold'><span className='font-ligth'>Episodes where appear: </span><br/>{character?.episode.length}</li>
        </ul>
      </div>
      <img src={character?.image} alt="character"/>
    </article>
  )
}

export default CardCharacter