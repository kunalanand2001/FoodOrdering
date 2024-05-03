import { REST_LINK_PT1, REST_LINK_PT2 } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurnatMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_LINK_PT1 + resId + REST_LINK_PT2);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurnatMenu;
