import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input.js";
import TextArea from "./TextArea.js";
import { BiPlus } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import { addNote } from "../utils/index.js";

const NoteInput = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
      <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white border rounded-lg border-corn-200 md:flex-row">
        <form id="inputNote" onSubmit={onSubmitEventHandler}>
          <div className="flex flex-col justify-between p-8 space-y-2 leading-normal">
            <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
              <MdEditNote className="inline mr-2 text-2xl" />
              Buat Catatan
            </h2>
            <p className="mb-3 font-normal text-corn-600">
              Tambahkan catatan kamu disini, isi dengan lengkap ya
            </p>
            <Input
              id="inputNoteTitle"
              label="Judul"
              type="text"
              placeholder="Masukkan judul catatan di sini"
              value={title}
              limitlength={50}
              onChange={(event) => {
                if (title.length <= 50) {
                  setTitle(event.target.value);
                }
              }}
            />
            <TextArea
              id="inputNoteBody"
              label="Isi Konten"
              placeholder="Masukkan isi catatan di sini"
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
            <button
              id="noteSubmit"
              type="submit"
              className="w-full text-white bg-corn-700 hover:bg-corn-800 focus:ring-4 focus:outline-none focus:ring-corn-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <BiPlus className="inline mr-2 text-xl" />
              Tambah Catatan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NoteInput;
