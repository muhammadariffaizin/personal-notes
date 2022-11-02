import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineArchive } from "react-icons/md";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  showFormattedDate,
} from "../utils";

const DetailNotePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const note = getNote(params.id);

  if (!note) {
    return (
      <div className="flex flex-col justify-center min-h-screen">
        <h1 className="text-xl text-center">Note Not Found</h1>
        <p className="text-center text-8xl">404</p>
        <Link to="/">
          <button className="flex justify-center w-full px-3 py-2 mt-3 text-sm rounded-md text-corn-800 bg-corn-200 hover:bg-corn-300">
            <BiArrowBack className="mr-1 text-xl" />
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  const onDeleteEvent = () => {
    deleteNote(note.id);
    navigate("/");
  };

  const onArchiveEvent = () => {
    const lastNote = getNote(params.id);
    if (lastNote.archived === false) {
      archiveNote(note.id);
      navigate("/archives");
    } else if (lastNote.archived === true) {
      unarchiveNote(note.id);
      navigate("/");
    }
  };

  return (
    <div className="justify-center w-full space-y-2">
      <h1 className="my-3 text-3xl font-semibold break-all text-corn-900 md:text-5xl">
        {note.title}
      </h1>
      <p className="text-sm font-normal text-corn-600">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="text-lg break-all text-corn-800">
        {note.body.split(/\n/).map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <div className="flex mt-4 space-x-2">
        <button
          onClick={onDeleteEvent}
          className="flex justify-center px-3 py-2 text-sm text-red-800 rounded-md bg-red-50 hover:bg-red-100"
        >
          <MdDeleteOutline className="mr-1 text-xl" />
          Hapus
        </button>
        <button
          onClick={onArchiveEvent}
          className="flex justify-center px-3 py-2 text-sm rounded-md text-corn-800 bg-corn-200 hover:bg-corn-300"
        >
          <MdOutlineArchive className="mr-1 text-xl" />
          {note.archived === true ? "Batal Arsipkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default DetailNotePage;
