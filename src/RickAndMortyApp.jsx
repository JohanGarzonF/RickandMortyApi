import { useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import Footer from './components/Footer'
import Header from './components/Header'
import InputSearch from './components/InputSearch'
import Loader from './components/Loader'
import LocationInfo from './components/LocationInfo'
import useLocation from './hooks/useLocation'
import usePagination from './hooks/usePagination'

function RickAndMortyApp() {

  const [getId, setGetId] = useState()
  const {location, isLoader} = useLocation(getId)
  const max = usePagination(location)

  return (
    <>
      {
        isLoader ?
          <Loader/>
        : 
          <>
            <div className="App">
              <Header/>
              <InputSearch
                setGetId={setGetId}
              />
              <LocationInfo
                location={location}
              />
              <div className='card_container container mg-b20 '>
                {
                  location?.residents.map(resident => (
                    <CardCharacter
                      resident={resident}
                      key={resident}
                    />
                  ))
                }
              </div>
              <Footer/>
            </div>
          </>
      }
    </>
  )
}

export default RickAndMortyApp
