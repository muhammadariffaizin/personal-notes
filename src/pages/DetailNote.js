import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineArchive } from "react-icons/md";
import { showFormattedDate } from "../utils";
import useLocalization from "../hooks/useLocalization";
import NoteApi from "../api/services/note";
import { isAxiosError } from "../api/axios";

const DetailNotePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const localization = useLocalization().pages.detailNote;
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(null);

  const handleGetNoteById = async () => {
    setLoading(true);
    await NoteApi.getNoteById(params.id)
      .then((response) => {
        setNote(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          navigate("/login");
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    handleGetNoteById();
  }, []);

  const onDeleteEvent = async () => {
    const { error } = await NoteApi.deleteNote(note.id);
    if (!error) {
      navigate("/");
    }
  };

  const onArchiveEvent = async () => {
    const { error, data } = await NoteApi.getNoteById(params.id);
    if (!error) {
      if (!data.archived) {
        const { errorArch } = await NoteApi.archiveNote(note.id);
        if (!errorArch) {
          navigate("/archives");
        }
      } else {
        const { errorArch } = await NoteApi.unarchiveNote(note.id);
        if (!errorArch) {
          navigate("/");
        }
      }
    }
  };

  if (loading) {
    return <p className="text-corn-900 dark:text-gray-100">loading...</p>;
  } else if (!note) {
    return (
      <div className="flex flex-col justify-center min-h-screen">
        <h1 className="text-xl text-center text-corn-900 dark:text-gray-100">
          Note Not Found
        </h1>
        <p className="text-center text-8xl text-corn-900 dark:text-gray-100">
          404
        </p>
        <Link to="/">
          <button className="flex justify-center w-full px-3 py-2 mt-3 text-sm rounded-md text-corn-800 dark:text-gray-200 bg-corn-200 dark:bg-gray-800 hover:bg-corn-300 dark:hover:bg-gray-700">
            <BiArrowBack className="mr-1 text-xl" />
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="justify-center w-full space-y-2">
      <h1 className="my-3 text-3xl font-semibold break-all text-corn-900 dark:text-gray-100 md:text-5xl">
        {note.title}
      </h1>
      <p className="text-sm font-normal text-corn-600 dark:text-gray-400">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="text-lg break-all text-corn-800 dark:text-gray-200">
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
          className="flex justify-center px-3 py-2 text-sm text-red-800 dark:text-red-200 rounded-md bg-red-50  dark:bg-red-800 hover:bg-red-100 dark:hover:bg-red-700"
        >
          <MdDeleteOutline className="mr-1 text-xl" />
          {localization.deleteBtn}
        </button>
        <button
          onClick={onArchiveEvent}
          className="flex justify-center px-3 py-2 text-sm rounded-md text-corn-800 dark:text-gray-200 bg-corn-200 dark:bg-gray-800 hover:bg-corn-300 dark:hover:bg-gray-700"
        >
          <MdOutlineArchive className="mr-1 text-xl" />
          {note.archived === true
            ? localization.unarchiveBtn
            : localization.archiveBtn}
        </button>
      </div>
    </div>
  );
};

export default DetailNotePage;
