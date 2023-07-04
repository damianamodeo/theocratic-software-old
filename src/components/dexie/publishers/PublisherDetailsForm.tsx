import Input from "@INPUTS/inputs/Input";
import { publishersDB } from "@SERVICES/dexie/publishers/initPublishers";
import { useEffect, useReducer } from "react";

const reducer = (state: any, { type, payload }: any) => {
  if (type === "init") return {...payload}
  return { ...state, [type]: payload };
};

type PublisherDetailsFormProps = {
  publisherID?: any;
};

const PublisherDetailsForm = ({ publisherID }: PublisherDetailsFormProps) => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
  });
  const onChange = ({ type, payload }: any) => {
    dispatch({ type, payload });
  };
  useEffect(() => {
    const publisher = publishersDB.publishers
      .get(publisherID)
      .then((result: any) => dispatch({ type: "init", payload: result }));
  }, []);

  return (
    <div className={`${null} `}>
      <Input onChange={onChange} value={state.firstName} property={"firstName"}>
        First Name
      </Input>
      <Input onChange={onChange} value={state.lastName} property={"lastName"}>
        Last Name
      </Input>
    </div>
  );
};

export default PublisherDetailsForm;
