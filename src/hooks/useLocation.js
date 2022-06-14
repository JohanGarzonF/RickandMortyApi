import axios from "axios"
import { useEffect, useState } from "react"

const useLocation = (getId) => {

  const [location, setLocation] = useState()
  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    let locationNumber
    if(getId !== undefined && getId !== ''){
      locationNumber = getId
    } else{
      locationNumber = Math.ceil(Math.random() * 126)
    }

    const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`

    axios.get(URL)
      .then(res => {
        setLocation(res.data)
        setIsLoader(false)
      })
      .catch(err => console.log(err))
  },[getId])
  return { location, isLoader }
}

export default useLocation