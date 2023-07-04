type AutocompleteProps = { 
  children?: any
  }

const Autocomplete = ({ children }: AutocompleteProps) => {
  return (
    <div className={`${null} `}>
      Autocomplete
      { children }
      
    </div>
  )
}

export default Autocomplete