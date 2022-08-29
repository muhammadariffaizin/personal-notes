import Input from "./Input.js";
import TextArea from "./TextArea.js";
import { BiPlus } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section id="add_note" className="container">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden md:flex-row">
          <form id="inputNote" onSubmit={this.onSubmitEventHandler}>
            <div className="flex flex-col justify-between p-8 leading-normal space-y-2">
              <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
                <MdEditNote className="inline text-2xl mr-2" />
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
                value={this.state.title}
                onChange={this.onTitleChangeHandler}
              />
              <TextArea
                id="inputNoteBody"
                label="Isi Konten"
                placeholder="Masukkan isi catatan di sini"
                value={this.state.body}
                onChange={this.onBodyChangeHandler}
              />
              <button
                id="noteSubmit"
                type="submit"
                className="w-full text-white bg-corn-700 hover:bg-corn-800 focus:ring-4 focus:outline-none focus:ring-corn-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <BiPlus className="inline text-xl mr-2" />
                Tambah Catatan
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default NoteInput;
