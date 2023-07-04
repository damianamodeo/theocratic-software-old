import Button from "@INPUTS/button/Button";
import { useAuth } from "./AuthContext";

const LogOut = () => {
  const { logOut }: any = useAuth();
  return <Button clickAction={logOut}>Log Out</Button>;
};

export default LogOut;
