import { useEffect } from "react";
import { useState } from "react";

export const useCustomHook = (fetchi) => {
  const [data, seetData] = useState("");
  useEffect(() => {
    fetch(fetchi)
      .then((res) => res.json())
      .then((dta) => seetData(dta));
  }, [fetchi]);
  return [data];
};
