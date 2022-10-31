import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils";

const AddNote = () => {
  const navigate = useNavigate();
  const onAddNotesHandler = ({ title, body }) => {
    addNote({ title, body });
    navigate("/");
  };

  return <NoteInput addNote={onAddNotesHandler} />;
};

export default AddNote;
