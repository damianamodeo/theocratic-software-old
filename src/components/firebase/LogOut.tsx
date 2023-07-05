import Button from "@INPUTS/Button";
import { useAuth } from "./AuthContext";

const LogOut = () => {
  const { logOut }: any = useAuth();
  return <Button color={"blue"} width={"md"} clickAction={logOut}>Log Out</Button>;
};

export default LogOut;
