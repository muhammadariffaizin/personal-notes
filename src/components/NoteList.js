import Note from "./Note";
import { getInitialData, showFormattedDate } from "../utils";

export default function NoteList() {
  const initialData = getInitialData();
  return (
    <div className="grid grid-cols-4 gap-2">
      {initialData.map((item) => {
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
