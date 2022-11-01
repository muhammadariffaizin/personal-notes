import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiQuestionMark } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { MdOutlineArchive } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="bg-corn-100">
      <nav className="fixed top-0 left-0 right-0 z-10 flex flex-col items-center w-full max-w-4xl px-4 mx-auto sm:px-6 bg-corn-100">
        <div className="flex items-center justify-between w-full py-6 border-b-2 border-corn-100">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <CgNotes className="text-3xl text-corn-800" />
            <h1 className="ml-2 text-2xl font-semibold text-sans text-corn-900">
              <Link to="/">Personal Notes</Link>
            </h1>
          </div>
          <div className="flex justify-end">
            <Link to="/note/add">
              <AiOutlinePlus className="m-2 text-2xl rounded-full text-corn-900" />
            </Link>
            <Link to="/archives">
              <MdOutlineArchive className="m-2 text-2xl rounded-full text-corn-900" />
            </Link>
            <Link to="/">
              <BiQuestionMark className="m-2 text-2xl rounded-full text-corn-900" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
