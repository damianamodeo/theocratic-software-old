import AddMapID from "@COMPONENTS/firebase/AddMaps";
import Button from "@INPUTS/button/Button";
import { useEffect } from "react";

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={`grid place-items-center gap-6`}>
      <AddMapID></AddMapID>
      <Button clickAction={() => changeSubpage("Add Publisher", "<")}>
        Add Publisher
      </Button>
      <Button clickAction={() => changeSubpage("Publishers List", "<")}>
        Publishers List
      </Button>
      <Button clickAction={() => changeSubpage("Update Publisher", "<")}>
        Update Publisher
      </Button>
      <Button clickAction={() => changeSubpage("Test", "<")}>Test Page</Button>
    </div>
  );
};

export default Home;
