import { lazy } from "react";
import App from "../../../components/containers/AppScreen";
import Home from "../pages/home/home/Home";
import HomeHeader from "../pages/home/home/HomeHeader";
import Settings from "../pages/settings/settings/Settings";
import SettingsHeader from "../pages/settings/settings/SettingsHeader";
import { ReactComponent as HomeIcon } from "../../../components/icons/home.svg";
import { ReactComponent as SettingsIcon } from "../../../components/icons/settings.svg";
import TestHeader from "../pages/home/test/TestHeader";
import Test from "../pages/home/test/Test";

const AddPublisher = lazy(
  () => import("../pages/home/publishers/addPublisher/AddPublisher")
);
const AddPublisherHeader = lazy(
  () => import("../pages/home/publishers/addPublisher/AddPublisherHeader")
);
const PublishersList = lazy(
  () => import("../pages/home/publishers/publishersList/PublishersList")
);
const PublishersListHeader = lazy(
  () => import("../pages/home/publishers/publishersList/PublishersListHeader")
);
const UpdatePublisher = lazy(
  () => import("../pages/home/publishers/updatePublisher/UpdatePublisher")
);
const UpdatePublisherHeader = lazy(
  () => import("../pages/home/publishers/updatePublisher/UpdatePublisherHeader")
);

function Orderly() {
  const pages = [
    {
      startPage: "Home",
      Icon: HomeIcon,
      subpages: {
        Home: { Content: Home, Header: HomeHeader },
        Test: { Content: Test, Header: TestHeader },
        "Add Publisher": { Content: AddPublisher, Header: AddPublisherHeader },
        "Publishers List": {
          Content: PublishersList,
          Header: PublishersListHeader,
        },
        "Update Publisher": {
          Content: UpdatePublisher,
          Header: UpdatePublisherHeader,
        },
      },
    },
    {
      startPage: "Settings",
      Icon: SettingsIcon,
      subpages: {
        Settings: { Content: Settings, Header: SettingsHeader },
      },
    },
  ];

  return <App pages={pages} />;
}

export default Orderly;
