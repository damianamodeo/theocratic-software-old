import AddMapID from "@COMPONENTS/firebase/AddMaps"
import Button from "@INPUTS/Button/Button"

type HomeType = { 
  children?: any
  }

const Home = ({ children }: HomeType) => {
  return (
    <div className={`centered `}>
     <AddMapID></AddMapID>
     <Button width={"medium"} color={"green"} size={"2xl"}>Hello</Button>
      { children }
      
    </div>
  )
}

export default Home