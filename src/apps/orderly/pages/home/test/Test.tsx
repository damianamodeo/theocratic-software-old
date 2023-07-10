import ThemeSelect from "@COMPONENTS/utility/ThemeSelect";
import Input from "@INPUTS/inputs/Input";
import Select from "@INPUTS/inputs/Select";

type TestProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const options = [
  {
    id: 1,
    option: "Durward Reynolds",
    unavailable: false,
    style: "font-bold text-blue-400",
    action: () => console.log("here"),
  },
  {
    id: 2,
    option: "Kenton Towne",
    unavailable: false,
  },
  {
    id: 3,
    option: "Therese Wunsch",
    unavailable: false,
  },
  {
    id: 4,
    option: "Benedict Kessler",
    unavailable: true,
  },
  {
    id: 5,
    option: "Katelyn Rohan",
    unavailable: false,
  },
];

const Test = ({ changeSubpage }: TestProps) => {
  return (
    <div className={`dark:text-white grid place-items-center gap-6 p-6`}>
      <div className={`${null} h-20`}></div>
      <ThemeSelect></ThemeSelect>
      <Input type="password">Input</Input>
      
    </div>
  );
};

export default Test;
