
const InputSearch = ({setGetId}) => {

  const searchLocation = e => {
    e.preventDefault()
    if(e.target.firstChild.value < 1 || e.target.firstChild.value > 126){
      setGetId(e.target.firstChild.value = 1)
    } else {
      setGetId(e.target.firstChild.value)
    }
  }

  return (
    <form onSubmit={searchLocation} className="mg-b20 form_inputSearch">
      <input type="text" className="input_search" placeholder="type a number from 1 - 126"/>
      <button className="btn_search font-bold">Search</button>
    </form>
  )
}

export default InputSearch