import { BiFilterAlt, BiSearch } from "react-icons/bi";

export default function NoteSearch(props) {
  return (
    <section id="search_section" className="container">
      <div className="relative flex flex-col p-4 overflow-hidden bg-white border rounded-lg border-corn-200">
        <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
          <BiFilterAlt className="inline mr-2 text-2xl" />
          Filter Catatan
        </h2>
        <p className="text-sm font-normal text-corn-600">
          Masukkan kata kunci judul catatan yang kamu cari di sini
        </p>
        <form
          id="searchNote"
          className="flex flex-row mt-3 space-x-2 rounded-lg hover:bg-corn-100 hover:shadow"
        >
          <div className="relative grow">
            <button
              id="searchSubmit"
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center p-3 rounded-lg hover:bg-corn-200"
            >
              <BiSearch />
            </button>
            <input
              type="text"
              id="searchNoteTitle"
              className="bg-corn-50 text-corn-900 text-sm rounded-lg focus:ring-corn-500 focus:border-corn-500 block w-full px-4 py-2.5 hover:bg-corn-100"
              placeholder="Cari Catatan"
              onChange={props.filterNote}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
