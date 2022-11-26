import axios from "axios";
import { useEffect, useState } from "react";
const useRepotedData = () => {
  const [ReportedDATA, setReportedDATA] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/bikes`).then((res) => {
      setReportedDATA(res.data);
    });
  }, []);
  return ReportedDATA;
};

export default useRepotedData;
