import AuthContext from "../contexts/auth";
import { useContext, useEffect } from "react";
import UserApi from "../api/services/user";
import { isAxiosError } from "../api/axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchUser = async () => {
    await UserApi.getAuthenticatedUser()
      .then((response) => {
        setAuth(response.data);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          navigate("/login");
        }
      });
  };

  useEffect(() => {
    fetchUser();
  }, [auth])
  
  return { auth, setAuth, fetchUser };
};

export default useAuth;
