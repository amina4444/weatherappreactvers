import { useState } from "react"

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    onSearch(value)
    setValue("")
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for a city..."
          value={value}
          onChange={(e) => setValue(e.target.value)}/>
         <button className="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg></button>
      </div>
    </form>
  )
}

export default SearchBar




