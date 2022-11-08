import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isAxiosError } from "../api/axios";
import NoteApi from "../api/services/note";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import useLocalization from "../hooks/useLocalization";

const ArchivedNotePage = () => {
  const [notes, setNotes] = useState([]);
  const [initialData, setInitialData] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const localization = useLocalization().pages.archivedNote;
  const navigate = useNavigate();

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title: title });
  };

  const handleGetArchivedNotes = async () => {
    setLoading(true);
    await NoteApi.getArchivedNotes()
      .then((response) => {
        setNotes(response.data);
        if (!initialData) {
          setInitialData(response.data);
        }
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
    if (!initialData) {
      handleGetArchivedNotes();
    }

    if (initialData) {
      let tempData = [...initialData];
      if (!title) {
        handleGetArchivedNotes();
      } else {
        setNotes(
          tempData.filter((note) =>
            note.title.toLowerCase().includes(title.toLowerCase())
          )
        );
      }
    }
  }, [title]);

  return (
    <div className="justify-center w-full space-y-2">
      <NoteSearch
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      {loading ? (
        <p className="text-corn-900 dark:text-gray-100">loading...</p>
      ) : (
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full p-3 m-2 overflow-hidden bg-white dark:bg-gray-800 border rounded-lg sm:p-4 border-corn-200 dark:border-gray-800">
            <h2 className="text-base font-semibold text-corn-900 dark:text-gray-100 md:text-xl">
              {localization.title}
            </h2>
          </div>
          <NoteList notes={notes} />
        </div>
      )}
    </div>
  );
};

export default ArchivedNotePage;
