import { useState } from "react"

const usePagination = location => {
  const [page, setPage] = useState(1)
  const [forPage, setForPage] = useState(6)


  const max = Math.ceil(location?.residents.length / forPage)
  return { max, page, setForPage, setPage } 
}

export default usePagination