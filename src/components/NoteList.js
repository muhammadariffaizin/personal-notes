import Note from "./Note";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return (
      <div className="w-full px-6 py-4 text-center">Tidak ada catatan</div>
    );
  }
  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-4">
      {notes.map((item) => {
        return (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            createdAt={item.createdAt}
            archived={item.archived}
          />
        );
      })}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
