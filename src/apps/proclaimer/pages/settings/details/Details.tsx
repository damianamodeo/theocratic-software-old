import Version from "@COMPONENTS/utility/Version";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="h-full overflow-y-auto">
        <Version></Version>
    </div>
  );
};

export default Settings;
