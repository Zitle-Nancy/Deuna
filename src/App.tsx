import { useEffect, useState } from "react";
import { Card, UserInformation } from "./components";

const API_URL = import.meta.env.VITE_API_URL;

const dataUser = {
  userName: "Nancy",
  email: "test@gmail.com",
  address: "debería ser opciona",
  phoneNumber: "34563434",
};

const App = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState([]);

  const fetchUserInformation = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        setError("Error in the API");
      }
      const results = await response.json();
      setUsers(results);
      setLoading(false);
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchUserInformation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log({ users });
  return (
    <ul className="h-[300px]">
      <Card />
      <UserInformation dataUser={dataUser} />
    </ul>
  );
};

export default App;
