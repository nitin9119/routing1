import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();
  const { handleToken } = useContext(AuthContext);

  const handleLogin = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleLogin}
        name=" email"
        placeholder="enter email"
      />
      <br />
      <input
        type="text"
        onChange={handleLogin}
        name="password"
        placeholder="Enter password"
      />

      <button
        onClick={() => {
          try {
            handleToken("12345");
            navigate(-1);
          } catch (e) {
            //
          }
        }}
      >
        Sign in
      </button>
    </div>
  );
};
