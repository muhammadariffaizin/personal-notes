import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "../api/axios";
import AuthApi from "../api/services/auth";
import useInput from "../hooks/useInput";
import useLocalization from "../hooks/useLocalization";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const localization = useLocalization().pages.register;
  const navigate = useNavigate();

  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const signUp = async (newUser) => {
    setLoading(true);
    await AuthApi.register(newUser)
      .then((response) => {
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          navigate("/register");
        }
        setLoading(false);
      });
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      signUp({ name, email, password });
    } else {
      alert(`${localization.message.confirmSignUpError}`);
    }
  };
  return (
    <section id="add_note" className="w-full">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-800 border rounded-lg border-corn-200 dark:border-gray-800 md:flex-row">
        <form id="inputNote" onSubmit={onSubmitEventHandler}>
          <div className="flex flex-col justify-between p-8 space-y-2 leading-normal">
            <h2 className="mb-3 text-base font-semibold text-corn-900 dark:text-gray-100 md:text-xl">
              {localization.title}
            </h2>
            <p className="mb-3 font-normal text-corn-600 dark:text-gray-400">
              {localization.description}
            </p>
            <label
              htmlFor="inputName"
              className="block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100"
            >
              {localization.nameInput.title}
            </label>
            <input
              id="inputName"
              type="text"
              name="name"
              className="bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow"
              placeholder={localization.nameInput.placeholder}
              value={name}
              onChange={onNameChange}
              required
            />
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
            <label
              htmlFor="inputConfirmPassword"
              className="block mb-2 text-sm font-medium text-corn-900 dark:text-gray-100"
            >
              {localization.confirmPasswordInput.title}
            </label>
            <input
              id="inputConfirmPassword"
              type="password"
              name="confirm-password"
              className="bg-corn-50 dark:bg-gray-700 text-corn-900 dark:text-gray-100 text-sm rounded-lg focus:ring-corn-400 dark:focus:ring-gray-600 focus:border-corn-400 dark:focus:border-gray-600 block w-full p-2.5 hover:bg-corn-100 dark:hover:bg-gray-600 hover:shadow"
              placeholder={localization.confirmPasswordInput.placeholder}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
            />
            <button
              id="noteSubmit"
              type="submit"
              className="w-full text-white dark:text-gray-100 bg-corn-700 dark:bg-gray-700 hover:bg-corn-800 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-corn-300 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {localization.submitBtn}
            </button>
            <p className="text-corn-900 dark:text-gray-100 text-center">
              {localization.login.text}{" "}
              <Link to="/login" className="text-corn-600 dark:text-gray-400">
                {localization.login.link}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
