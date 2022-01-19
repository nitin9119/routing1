import { Link } from "react-router-dom";

export const Users = () => {
  return [1, 2, 3, 4, 5].map((e, i) => (
    <div key={i}>
      <Link to={`/users/${e}`}>user-{e} </Link>
    </div>
  ));
};
