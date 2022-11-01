import React from "react";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import { getAllNotes } from "../utils";

class ArchiveNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      query: "",
    };

    this.onFilterNoteHandler = this.onFilterNoteHandler.bind(this);

    this.onArchivedNotes = this.onArchivedNotes.bind(this);
  }

  onFilterNoteHandler(query) {
    this.setState(() => {
      return {
        query: query.target.value,
      };
    });
  }

  onArchivedNotes() {
    const filteredNotes = this.state.notes.filter(
      (item) => item.archived === true
    );
    if (this.state.query) {
      return filteredNotes.filter((item) =>
        item.title.toLowerCase().includes(this.state.query.toLowerCase())
      );
    }
    return filteredNotes;
  }
  render() {
    return (
      <div className="justify-center w-full space-y-2">
        <NoteSearch filterNote={this.onFilterNoteHandler} />
        <div className="relative flex flex-col items-center justify-center w-full p-3 overflow-hidden bg-white border rounded-lg sm:p-4 border-corn-200">
          <h2 className="text-base font-semibold text-corn-900 md:text-xl">
            Catatan Arsip
          </h2>
        </div>
        <NoteList notes={this.onArchivedNotes()} />
      </div>
    );
  }
}

export default ArchiveNotePage;
