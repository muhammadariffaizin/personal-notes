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
      archived: [],
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
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
        const notesState = prevState.notes;
        const archivedState = prevState.archived;
        const noteTarget = findItemIndex(id, notesState);
  
        if (noteTarget === -1) return;
  
        const movedNote = notesState.splice(noteTarget, 1)
        console.log(notesState)
        return { 
            notes: notesState,
            archived: archivedState.concat(movedNote)
        };
    });
  }

  render() {
    return (
      <div className="App bg-corn-100">
        <Navbar />
        <main className="max-w-4xl px-4 mx-auto flex flex-col justify-center items-center w-full min-h-screen space-y-2">
          <NoteInput addNote={this.onAddNotesHandler} />
          <NoteSearch />
          <div className="flex flex-col p-3 sm:p-4 w-full items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Catatan Aktif
            </h2>
          </div>
          <NoteList
            notes={this.state.notes}
            deleteNote={this.onDeleteNotesHandler}
            archiveNote={this.onArchiveNotesHandler}
          />
          <div className="flex flex-col p-3 sm:p-4 w-full items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Arsip
            </h2>
          </div>
          <NoteList
            notes={this.state.archived}
            deleteNote={this.onDeleteNotesHandler}
            archiveNote={this.onArchiveNotesHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
