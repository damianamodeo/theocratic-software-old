import Button from "@INPUTS/inputs/Button";
import Input from "@INPUTS/inputs/Input";
import Select from "@INPUTS/inputs/Select";
import Switch from "@INPUTS/inputs/Switch";
import { addNewPublisher } from "@SERVICES/dexie/publishers/addNewPublisher";
import { useReducer } from "react";

const reducer = (state: any, { type, payload }: any) => {
  return { ...state, [type]: payload };
};
type AddPublisherPageProps = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const AddPublisher = ({ changeSubpage }: AddPublisherPageProps) => {
  const [state, dispatch] = useReducer(reducer, {
    "First Name": "",
    "Last Name": "",
    "Middle Name": "",
    "Display Name": "",
    "Mobile Phone": "",
    "Family Head": false,
  });
  const onChange = ({ type, payload }: any) => {
    dispatch({ type, payload });
  };

  // console.log("AddPublisher", state);
  return (
    <div className={`h-full mt-2 dark:text-white center-v flex-col gap-2`}>
      <Input onChange={onChange}>First Name</Input>
      <Input onChange={onChange}>Middle Name</Input>
      <Input onChange={onChange}>Last Name</Input>
      <Input onChange={onChange}>Display Name</Input>
      <Input type="number">Mobile Phone</Input>
      <Select
        onSelect={({ id, option, unavailable, style, action }) =>
          console.log(id, option, unavailable, style, action)
        }
        options={[
          {
            id: 1,
            option: "Elder",
          },
          {
            id: 2,
            option: "Ministerial Servant",
          },
          {
            id: 3,
            option: "Brother",
          },
          {
            id: 4,
            option: "Sister",
          },
        ]}
      >
        Publisher Type
      </Select>
      <Button
        clickAction={() =>
          addNewPublisher({
            firstName: state["First Name"],
            middleName: state["Last Name"],
            lastName: state["Middle Name"],
            otherName: state["Display Name"],
            mobilePhone: state["Mobile Phone"],
            publisherType: state["Family Head"],
          })
        }
      >
        Submit
      </Button>
    </div>
  );
};

export default AddPublisher;
