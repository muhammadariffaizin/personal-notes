import React from "react";
import Navbar from "./components/Navbar";
import NoteInput from "./components/NoteInput";
import NoteSearch from "./components/NoteSearch";
import NoteList from "./components/NoteList";
import { getInitialData, findItemIndex } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      query: "",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onFilterNoteHandler = this.onFilterNoteHandler.bind(this);

    this.onActiveNotes = this.onActiveNotes.bind(this);
    this.onArchivedNotes = this.onArchivedNotes.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNotesHandler(id) {
    this.setState((prevState) => {
      const notesState = prevState.notes;
      const noteTarget = findItemIndex(id, notesState);

      if (noteTarget === -1) return;

      return notesState.splice(noteTarget, 1);
    });
  }

  onArchiveNotesHandler(id) {
    this.setState((prevState) => {
      let notesState = prevState.notes;
      const noteTarget = findItemIndex(id, notesState);

      if (noteTarget === -1) return;

      if (notesState[noteTarget].archived === true) {
        notesState[noteTarget].archived = false;
      } else if (notesState[noteTarget].archived === false) {
        notesState[noteTarget].archived = true;
      }

      return notesState;
    });
  }

  onFilterNoteHandler(query) {
    this.setState(() => {
      return {
        query: query.target.value,
      };
    });
  }

  onActiveNotes() {
    const filteredNotes = this.state.notes.filter(
      (item) => item.archived === false
    );
    if (this.state.query) {
      return filteredNotes.filter((item) =>
        item.title.toLowerCase().includes(this.state.query.toLowerCase())
      );
    }
    return filteredNotes;
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
      <div className="App bg-corn-100">
        <Navbar />
        <main className="flex flex-col items-center justify-center w-full max-w-4xl min-h-screen px-4 mx-auto space-y-2">
          <NoteInput addNote={this.onAddNotesHandler} />
          <NoteSearch filterNote={this.onFilterNoteHandler} />
          <div className="relative flex flex-col items-center justify-center w-full p-3 overflow-hidden bg-white border rounded-lg sm:p-4 border-corn-200">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Catatan Aktif
            </h2>
          </div>
          <NoteList
            notes={this.onActiveNotes()}
            deleteNote={this.onDeleteNotesHandler}
            archiveNote={this.onArchiveNotesHandler}
          />
          <div className="relative flex flex-col items-center justify-center w-full p-3 overflow-hidden bg-white border rounded-lg sm:p-4 border-corn-200">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Arsip
            </h2>
          </div>
          <NoteList
            notes={this.onArchivedNotes()}
            deleteNote={this.onDeleteNotesHandler}
            archiveNote={this.onArchiveNotesHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
