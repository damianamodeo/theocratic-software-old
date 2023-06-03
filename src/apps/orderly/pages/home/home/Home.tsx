import AddMapID from "@COMPONENTS/firebase/AddMaps"

type HomeType = { 
  children?: any
  }

const Home = ({ children }: HomeType) => {
  return (
    <div className={`centered `}>
     <AddMapID></AddMapID>
      { children }
      
    </div>
  )
}

export default Home