import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import useLocalization from "../hooks/useLocalization";
import { getArchivedNotes } from "../utils";

const ArchivedNotePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const localization = useLocalization().pages.archivedNote;

  const title = searchParams.get("title") || "";

  const setSearchParamsHandler = (title) => {
    setSearchParams({ title: title });
  };

  useEffect(() => {
    if (!title) {
      setNotes(getArchivedNotes());
    } else {
      setNotes(
        getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
  }, [title]);

  return (
    <div className="justify-center w-full space-y-2">
      <NoteSearch
        title={title}
        setSearchParamsHandler={setSearchParamsHandler}
      />
      <div className="relative flex flex-col items-center justify-center w-full p-3 overflow-hidden bg-white border rounded-lg sm:p-4 border-corn-200">
        <h2 className="text-base font-semibold text-corn-900 md:text-xl">
          {localization.title}
        </h2>
      </div>
      <NoteList notes={notes} />
    </div>
  );
};

export default ArchivedNotePage;
