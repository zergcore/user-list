import { useEffect,useState } from "react";
import axios from 'axios';

const useGetUsers = (API) => {
    const [users, setUsers]=useState([]);
	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API); //request
            setUsers(response.data.users);
        }
        fetchData();
    }, []);
  return users;
}

export default useGetUsers