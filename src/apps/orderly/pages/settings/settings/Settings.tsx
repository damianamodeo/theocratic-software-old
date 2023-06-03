import ThemeSelect from "@COMPONENTS/utility/ThemeSelect";
import Version from "@COMPONENTS/utility/Version";

type SettingsType = {
  children?: any;
};

const Settings = ({ children }: SettingsType) => {
  return (
    <div className={`grid place-items-center p-2`}>
      <Version></Version>
      <ThemeSelect></ThemeSelect>
    </div>
  );
};

export default Settings;
