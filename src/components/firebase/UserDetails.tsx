import { useAuth } from "./AuthContext";

type SignInProps = {
  children?: any;
};

const UserDetails = ({ children }: SignInProps) => {
  const { currentUser }: any = useAuth();
  return (
    <div className={`${null} flex items-center`}>
      <img
        className={`${null} rounded-full h-12 aspect-square`}
        src={currentUser?.photoURL}
      />
      <div className={`${null} grid place-items-center p-2`}>
        <p className={`${null} flex items-center`}>
          Signed in as:
          <span className={`${null} font-bold pl-2`}>
            {currentUser?.displayName}
          </span>
        </p>
        <p className={`${null} flex items-center`}>{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
