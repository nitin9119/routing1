import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const UserDetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState({});
  const { token } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userid}`)
      .then((d) => d.json())
      .then((d) => setUser(d.data));
  }, [userid]);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <img src={user.avatar} />
      {user.first_name}- {user.last_name}
      Contact:-{user.email}
    </div>
  );
};
