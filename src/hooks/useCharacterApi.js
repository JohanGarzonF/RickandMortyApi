import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCharacterApi = resident => {

  const [character, setCharacter] = useState()

  useEffect(() => {
    const URL = resident
    axios.get(URL)
      .then(res => setCharacter(res?.data))
      .catch(err => console.log(err))
  },[])
  return character
}

export default useCharacterApi