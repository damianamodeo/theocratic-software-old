import AddMapID from "@COMPONENTS/firebase/AddMaps";
import Button from "@INPUTS/Button";
import { useEffect } from "react";

type HomeType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Home = ({ changeSubpage }: HomeType) => {
  return (
    <div className={`grid place-items-center gap-6`}>
      <AddMapID></AddMapID>
      <Button color={"blue"} width={"md"} clickAction={() => changeSubpage("Add Publisher", "<")}>
        Add Publisher
      </Button>
      <Button color={"blue"} width={"md"} clickAction={() => changeSubpage("Publishers List", "<")}>
        Publishers List
      </Button>
      <Button color={"blue"} width={"md"} clickAction={() => changeSubpage("Update Publisher", "<")}>
        Update Publisher
      </Button>
      <Button color={"blue"} width={"md"} clickAction={() => changeSubpage("Test", "<")}>Test Page</Button>
    </div>
  );
};

export default Home;
