import Navbar from "./components/Navbar";
import NoteInput from "./components/NoteInput";
import NoteSearch from "./components/NoteSearch";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <div className="App bg-corn-100">
      <Navbar />
      <main className="max-w-4xl px-4 mx-auto flex flex-col justify-center items-center w-full min-h-screen space-y-2">
        <NoteInput />
        <NoteSearch />
        <NoteList />
      </main>
    </div>
  );
};

export default App;
