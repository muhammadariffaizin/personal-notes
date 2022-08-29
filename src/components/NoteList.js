import Note from "./Note";
import { showFormattedDate } from "../utils";

export default function NoteList({ data }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 gap-2">
      {data.map((item) => {
        return (
          <Note
            id={item.id}
            title={item.title}
            body={item.body}
            createdAt={showFormattedDate(item.createdAt)}
          />
        );
      })}
    </div>
  );
}
