import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import useLocalization from "../hooks/useLocalization";

const PageNotFound = () => {
  const localization = useLocalization().pages.notFound;

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-xl text-center">{localization.titlePage}</h1>
      <p className="text-center text-8xl">404</p>
      <Link to="/">
        <button className="flex justify-center w-full px-3 py-2 mt-3 text-sm rounded-md text-corn-800 bg-corn-200 hover:bg-corn-300">
          <BiArrowBack className="mr-1 text-xl" />
          {localization.backHome}
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
