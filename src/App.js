import React from "react";
import Navbar from "./components/Navbar";
import NoteInput from "./components/NoteInput";
import NoteSearch from "./components/NoteSearch";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archived: [],
    };
  }

  render() {
    return (
      <div className="App bg-corn-100">
        <Navbar />
        <main className="max-w-4xl px-4 mx-auto flex flex-col justify-center items-center w-full min-h-screen space-y-2">
          <NoteInput />
          <NoteSearch />
          <div className="flex flex-col p-3 sm:p-4 w-full items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Catatan Aktif
            </h2>
          </div>
          <NoteList data={this.state.notes} />
          <div className="flex flex-col p-3 sm:p-4 w-full items-center justify-center bg-white rounded-lg border border-corn-200 relative overflow-hidden">
            <h2 className="text-base font-semibold text-corn-900 md:text-xl">
              Arsip
            </h2>
          </div>
          <NoteList data={this.state.archived} />
        </main>
      </div>
    );
  }
}

export default App;
