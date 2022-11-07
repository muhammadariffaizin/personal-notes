import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { BiPlus } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { addNote } from "../utils";
import useLocalization from "../hooks/useLocalization";

const AddNotePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const localization = useLocalization().pages.addNote;

  const navigate = useNavigate();

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title: title, body: body });

    navigate("/");
    setTitle("");
    setBody("");
  };

  return (
    <section id="add_note" className="w-full">
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-800 border rounded-lg border-corn-200 dark:border-gray-800 md:flex-row">
        <form id="inputNote" onSubmit={onSubmitEventHandler}>
          <div className="flex flex-col justify-between p-8 space-y-2 leading-normal">
            <h2 className="mb-3 text-base font-semibold text-corn-900 dark:text-gray-100 md:text-xl">
              <MdEditNote className="inline mr-2 text-2xl" />
              {localization.title}
            </h2>
            <p className="mb-3 font-normal text-corn-600 dark:text-gray-400">
              {localization.description}
            </p>
            <Input
              id="inputNoteTitle"
              label={localization.inputTitle.title}
              type="text"
              placeholder={localization.inputTitle.placeholder}
              value={title}
              limitLength={50}
              onChangeHandler={(event) => {
                if (title.length <= 50) {
                  setTitle(event.target.value);
                }
              }}
            />
            <TextArea
              id="inputNoteBody"
              label={localization.inputContent.title}
              placeholder={localization.inputContent.placeholder}
              value={body}
              onChangeHandler={(event) => setBody(event.target.value)}
            />
            <button
              id="noteSubmit"
              type="submit"
              className="w-full text-white dark:text-gray-100 bg-corn-700 dark:bg-gray-700 hover:bg-corn-800 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-corn-300 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <BiPlus className="inline mr-2 text-xl" />
              {localization.submitBtn}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNotePage;
