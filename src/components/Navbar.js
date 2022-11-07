import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiQuestionMark } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineArchive } from "react-icons/md";
import { HiSun, HiMoon } from "react-icons/hi";

import useLanguage from "../hooks/useLanguage";
import useLocalization from "../hooks/useLocalization";
import useColorScheme from "../hooks/useColorScheme";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const localization = useLocalization().components.navbar;

  return (
    <header className="bg-corn-100 dark:bg-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col items-center w-full max-w-4xl px-4 mx-auto sm:px-6 bg-corn-100 dark:bg-gray-900">
        <div className="flex items-center justify-between w-full py-6 border-b-2 border-corn-100 dark:border-gray-900">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <CgNotes className="text-3xl text-corn-800 dark:text-gray-200" />
            <h1 className="ml-2 text-2xl font-semibold text-sans text-corn-900 dark:text-gray-100">
              <Link to="/">{localization.appName}</Link>
            </h1>
          </div>
          <div className="flex justify-end">
            <Link to="/note/add">
              <AiOutlinePlus className="m-2 text-2xl text-corn-900 dark:text-gray-100" />
            </Link>
            <Link to="/archives">
              <MdOutlineArchive className="m-2 text-2xl text-corn-900 dark:text-gray-100" />
            </Link>
            <Link to="/">
              <BiQuestionMark className="m-2 text-2xl text-corn-900 dark:text-gray-100" />
            </Link>
            <button
              onClick={toggleLanguage}
              className="m-2 text-corn-900 dark:text-gray-100"
              width="24"
            >
              <div>{language === "id" ? "id" : "en"}</div>
            </button>
            <button
              onClick={toggleColorScheme}
              className="m-2 text-corn-900 dark:text-gray-100"
            >
              {colorScheme === "dark" ? (
                <HiSun className="text-lg md:text-2xl" />
              ) : (
                <HiMoon className="text-lg md:text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
