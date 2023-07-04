type SearchProps = { 
  children?: any
  }

const Search = ({ children }: SearchProps) => {
  return (
    <div className={`${null} `}>
      Search
      { children }
      
    </div>
  )
}

export default Search