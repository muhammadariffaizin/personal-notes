import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "../api/axios";
import AuthApi from "../api/services/auth";
import Token from "../api/token";
import useAuth from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import useLocalization from "../hooks/useLocalization";

const Login = () => {
  const localization = useLocalization().pages.login;
  const [loading, setLoading] = useState(false);
  const { auth, fetchUser } = useAuth();
  const navigate = useNavigate();

  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const signIn = async (user) => {
    setLoading(true);
    await AuthApi.login(user)
      .then((response) => {
        Token.setToken(response.data.accessToken);
      })
      .then(async () => {
        await fetchUser();
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
        }
        setLoading(false);
      });
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    signIn({ email, password });
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <section id="add_note" className="w-full">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white border rounded-lg dark:bg-gray-800 border-corn-200 dark:border-gray-800 md:flex-row">
        <form id="inputNote" onSubmit={onSubmitEventHandler}>
          <div className="flex flex-col justify-between p-8 space-y-2 leading-normal">
            <h2 className="mb-3 text-base font-semibold text-corn-900 dark:text-gray-100 md:text-xl">
              {localization.title}
            </h2>
            <p className="mb-3 font-normal text-corn-600 dark:text-gray-400">
              {localization.description}
            </p>
            <label
              htmlFor="inputEmail"
              className="block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100"
            >
              {localization.emailInput.title}
            </label>
            <input
              id="inputEmail"
              type="email"
              name="email"
              className="bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow"
              placeholder={localization.emailInput.placeholder}
              value={email}
              onChange={onEmailChange}
              required
            />
            <label
              htmlFor="inputPassword"
              className="block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100"
            >
              {localization.passwordInput.title}
            </label>
            <input
              id="inputPassword"
              type="password"
              name="password"
              className="bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow"
              placeholder={localization.passwordInput.placeholder}
              value={password}
              onChange={onPasswordChange}
              required
            />
            <button
              id="noteSubmit"
              type="submit"
              className="w-full text-white dark:text-gray-100 bg-corn-700 dark:bg-gray-700 hover:bg-corn-800 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-corn-300 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {localization.submitBtn}
            </button>
            <p className="text-center text-corn-900 dark:text-gray-100">
              {localization.register.text}{" "}
              <Link to="/register" className="text-corn-600 dark:text-gray-400">
                {localization.register.link}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
