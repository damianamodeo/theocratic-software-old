import AddMapID from "@COMPONENTS/firebase/AddMaps";
import Button from "@INPUTS/Button/Button";

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={`grid place-items-center gap-6`}>
      <AddMapID></AddMapID>
      <Button clickAction={() => changeSubpage("Test", "<")}>Test Page</Button>
    </div>
  );
};

export default Home;
