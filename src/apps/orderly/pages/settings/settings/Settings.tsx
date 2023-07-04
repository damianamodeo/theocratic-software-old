import User from "@COMPONENTS/firebase/User";
import ThemeSelect from "@COMPONENTS/utility/ThemeSelect";
import Version from "@COMPONENTS/utility/Version";

type SettingsType = {
  children?: any;
};

const Settings = ({ children }: SettingsType) => {
  return (
    <div className={`grid place-items-center gap-4`}>
      <Version></Version>
      <ThemeSelect></ThemeSelect>
      <User></User>
    </div>
  );
};

export default Settings;
