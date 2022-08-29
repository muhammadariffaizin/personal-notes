import Note from "./Note";
import { showFormattedDate } from "../utils";

export default function NoteList(props) {
  const deleteNote = (id) => {
    props.deleteNote(id);
  };

  const archiveNote = (id) => {
    props.archiveNote(id);
  };

  if (props.notes.length === 0) {
    return (
      <div className="w-full px-6 py-4 text-center">Tidak ada catatan</div>
    );
  }
  console.log(props.notes);
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-2">
      {props.notes.map((item) => {
        return (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            createdAt={showFormattedDate(item.createdAt)}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
          />
        );
      })}
    </div>
  );
}
