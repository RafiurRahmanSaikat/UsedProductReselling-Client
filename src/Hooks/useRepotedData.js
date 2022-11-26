import axios from "axios";
import { useEffect, useState } from "react";
const useRepotedData = () => {
  const [ReportedDATA, setReportedDATA] = useState(null);
 

  useEffect(() => {
    axios.get(`https://dream-bike-theta.vercel.app/bikes`).then((res) => {
      setReportedDATA(res.data);
    });
  }, ["bikes"]);
  return ReportedDATA;
};

export default useRepotedData;
