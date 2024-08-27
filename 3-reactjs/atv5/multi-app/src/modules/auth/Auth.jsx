import { useContext } from "react";
import isAuthenticate from "../../contexts/isAuthenticate";
import { useNavigate } from "react-router-dom";

export default function Auth({ children }) {
  const auth = useContext(isAuthenticate);
  const navigate = useNavigate();
  if(auth.isAuthenticated){
    return children
  } else {
    navigate("/Login");
  }
}
