import axios from "axios";
import { useEffect, useState } from "react";
const useAdminData= role=>{
    const [AdminDATA,setAdminDATA]=useState(null)   

    useEffect(() => {
      axios
        .get(`http://localhost:5000/admindata/?search=${role}`)
        .then((res) => {
            setAdminDATA(res.data);
        })
    }, [role]);
    return AdminDATA
    
}

export default useAdminData