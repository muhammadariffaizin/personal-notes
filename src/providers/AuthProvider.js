import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "../api/axios";
import UserApi from "../api/services/user";
import Token from "../api/token";
import AuthContext from "../contexts/auth";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!Token.getToken()) {
      navigate("/login");
    }

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
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
