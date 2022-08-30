import Note from "./Note";
import { showFormattedDate } from "../utils";

export default function NoteList(props) {
  if (props.notes.length === 0) {
    return (
      <div className="w-full px-6 py-4 text-center">Tidak ada catatan</div>
    );
  }
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
            archived={item.archived}
            deleteNote={props.deleteNote}
            archiveNote={props.archiveNote}
          />
        );
      })}
    </div>
  );
}
