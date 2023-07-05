import Button from "@INPUTS/Button";
import { useAuth } from "./AuthContext";
import { GoogleIcon } from "@ICONS/IconIndex";

type SignInProps = {
  children?: any;
};

const SignIn = ({ children }: SignInProps) => {
  const { signIn }: any = useAuth();
  return (
    <Button color={"blue"} width={"md"} clickAction={signIn}>
      <div className={`${null} flex items-center gap-2`}>
        <GoogleIcon></GoogleIcon>
        Sign in with Google
      </div>
    </Button>
  );
};

export default SignIn;
