import OpenSource from "@COMPONENTS/utility/OpenSource";
import Version from "@COMPONENTS/utility/Version";
import ChangeLog from "./ChangeLog";

type SettingsType = {
  changeSubpage: (newSubpage: string, direction: "<" | ">") => void;
};

const Settings = ({ changeSubpage }: SettingsType) => {
  return (
    <div className="h-full overflow-y-auto">
        <Version></Version>
        <ChangeLog></ChangeLog>
        <OpenSource></OpenSource>
    </div>
  );
};

export default Settings;
