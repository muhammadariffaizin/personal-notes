import React from "react";
import { MdDeleteOutline, MdOutlineArchive } from "react-icons/md";

export default function Note(props) {
  const onDeleteEvent = () => {
    props.deleteNote(props.id);
  };

  const onArchiveEvent = () => {
    props.archiveNote(props.id);
  };

  return (
    <div
      id={props.id}
      className="flex flex-col bg-white rounded-lg border border-corn-200 relative overflow-hidden"
    >
      <div className="p-4 sm:p-6 h-full">
        <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
          {props.title}
        </h2>
        <p className="text-sm font-normal text-corn-600">{props.createdAt}</p>
        <p className="text-corn-800">
          {props.body.split(/\n/).map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="flex w-full bottom-0">
        <button
          onClick={onDeleteEvent}
          className="flex justify-center text-sm text-red-800 bg-red-50 w-full p-2 hover:bg-red-100"
        >
          <MdDeleteOutline className="text-xl mr-1" />
          Hapus
        </button>
        <button
          onClick={onArchiveEvent}
          className="flex justify-center text-sm text-corn-800 bg-corn-200 w-full p-2 hover:bg-corn-300"
        >
          <MdOutlineArchive className="text-xl mr-1" />
          Arsipkan
        </button>
      </div>
    </div>
  );
}
