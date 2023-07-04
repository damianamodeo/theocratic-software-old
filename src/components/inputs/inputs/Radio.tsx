type RadioProps = { 
  children?: any
  }

const Radio = ({ children }: RadioProps) => {
  return (
    <div className={`${null} `}>
      Radio
      { children }
      
    </div>
  )
}

export default Radio