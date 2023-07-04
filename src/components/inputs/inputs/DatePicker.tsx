type DatePickerProps = { 
  children?: any
  }

const DatePicker = ({ children }: DatePickerProps) => {
  return (
    <div className={`${null} `}>
      DatePicker
      { children }
      
    </div>
  )
}

export default DatePicker