import React from 'react'

const LocationInfo = ({location}) => {

  
  return (
    <article className='location_info mg-b20 container'>
      <h2 className='mg-b20 mg-t20'>{location?.name}</h2>
      <ul className='location_list mg-b20'>
        <li><span className='font-bold'>Type: </span><br/>{location?.type}</li>
        <li><span className='font-bold'>Dimension: </span><br/>{location?.dimension}</li>
        <li><span className='font-bold'>Population: </span><br/>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo