import Input from "./Input.js";
import TextArea from "./TextArea.js";
import {BiPlus } from "react-icons/bi";

export default function NoteInput() {
  return (
    <section id="add_note" className="container">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden md:flex-row">
        <form id="inputNote">
          <div className="flex flex-col justify-between p-8 leading-normal space-y-2">
            <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
              <i className="fa fa-file-import"></i>
              Buat Catatan
            </h2>
            <p className="mb-3 font-normal text-corn-600">
              Tambahkan catatan kamu disini, isi dengan lengkap ya
            </p>
            <Input id="inputNoteTitle" label="Judul" type="text" placeholder="Judul Catatan" />
            <TextArea id="inputNoteContent" label="Isi Konten" />
            <button
              id="noteSubmit"
              type="submit"
              className="w-full text-white bg-corn-700 hover:bg-corn-800 focus:ring-4 focus:outline-none focus:ring-corn-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <BiPlus className="inline text-xl"/>
              Tambah Catatan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
