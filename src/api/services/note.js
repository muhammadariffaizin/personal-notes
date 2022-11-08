import axios from "../axios";
import Token from "../token";

class NoteApi {
  static async withHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${Token.getToken()}`;
  }

  static async getActiveNotes() {
    this.withHeader();
    return await axios
      .get("/notes")
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }

  static async getArchivedNotes() {
    this.withHeader();
    const response = await axios.get("/notes/archived");
    return response.data;
  }

  static async getNoteById(id) {
    this.withHeader();
    const response = await axios.get(`/notes/${id}`);
    return response.data;
  }

  static async createNote({ title, body }) {
    this.withHeader();
    const response = await axios.post("/notes", { title, body });
    return response.data;
  }

  static async archiveNote(id) {
    this.withHeader();
    const response = await axios.post(`/notes/${id}/archive`);
    return response.data;
  }

  static async unarchiveNote(id) {
    this.withHeader();
    const response = await axios.post(`/notes/${id}/unarchive`);
    return response.data;
  }

  static async deleteNote(id) {
    this.withHeader();
    const response = await axios.delete(`/notes/${id}`);
    return response.data;
  }
}

export default NoteApi;
