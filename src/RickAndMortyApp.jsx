import { useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import Footer from './components/Footer'
import Header from './components/Header'
import InputSearch from './components/InputSearch'
import Loader from './components/Loader'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import useLocation from './hooks/useLocation'

function RickAndMortyApp() {

  const [getId, setGetId] = useState()
  const {location, isLoader} = useLocation(getId)
  const [page, setPage] = useState(1)

  let arrayResidents = []
  const residentPerPage = 6
  if(location?.residents.length < residentPerPage){
    arrayResidents = [...location?.residents]
  }else {
    const lastResident = page * residentPerPage
    arrayResidents = location?.residents.slice(lastResident - residentPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentPerPage) // 8 = cantidad páginas máxima
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(page / pagesPerBlock) // 2 = segundo bloque
  if(currentBlock * pagesPerBlock >= quantityPages){
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++){
      arrayPages.push(i)
    }
  } else {
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
      arrayPages.push(i)
    }
  }

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
              {
                quantityPages > 1 && 
                <Pagination
                  arrayPages={arrayPages}
                  page={page}
                  setPage={setPage}
                  quantityPages={quantityPages}
                />
              }
              <div className='card_container container mg-b20 '>
                {
                  arrayResidents?.map(resident => (
                    <CardCharacter
                      resident={resident}
                      key={resident}
                    />
                  ))
                }
              </div>
              <div className='pagination-end'>
                {
                  quantityPages > 1 && 
                  <Pagination
                    arrayPages={arrayPages}
                    page={page}
                    setPage={setPage}
                    quantityPages={quantityPages}
                  />
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
