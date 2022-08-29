import { BiQuestionMark } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";

export default function Navbar() {
  return (
    <header className="relative bg-corn-100">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-corn-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <CgNotes className="text-3xl text-corn-800" />
            <h1 className="text-2xl text-sans text-corn-900 font-semibold ml-2">
              Personal Notes
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <BiQuestionMark className="text-2xl text-corn-900" />
          </div>
        </div>
      </nav>
    </header>
  );
}
