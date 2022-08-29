import React from "react";
import Note from "./Note";
import { showFormattedDate } from "../utils";

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.notes,
    };
  }

  render() {
    if (this.state.notes.length === 0) {
      return <div className="w-full px-6 py-4 text-center">Tidak ada catatan</div>;
    }
    return (
      <div className="flex flex-col md:grid md:grid-cols-4 gap-2">
        {this.state.notes.map((item) => {
          return (
            <Note
              key={item.id}
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
}

export default NoteList;
