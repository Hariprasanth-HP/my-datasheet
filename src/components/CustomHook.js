import { useEffect } from "react";
import { useState } from "react";

export const useCustomHook = (fetching) => {
  const [data, seetData] = useState("");
  useEffect(() => {
    fetch(fetchi)
      .then((res) => res.json())
      .then((dta) => seetData(dta));
  }, [fetching]);
  return [data];
};
