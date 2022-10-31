import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <h1 className="text-xl text-center">Page Not Found</h1>
      <p className="text-center text-8xl">404</p>
      <Link to="/">
        <button className="flex justify-center w-full px-3 py-2 mt-3 text-sm rounded-md text-corn-800 bg-corn-200 hover:bg-corn-300">
          <BiArrowBack className="mr-1 text-xl" />
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
