import { BiSearch } from "react-icons/bi";

export default function NoteSearch() {
  return (
    <section id="search_section" className="container">
      <div className="flex flex-col bg-white rounded-lg border border-corn-200 relative overflow-hidden p-4">
        <h2 className="mb-3 text-base font-semibold text-corn-900 md:text-xl">
          <i className="fa fa-filter"></i>
          Filter Catatan
        </h2>
        <p className="text-sm font-normal text-corn-600">
          Masukkan kata kunci judul catatan yang kamu cari di sini
        </p>
        <form
          id="searchNote"
          className="flex flex-row mt-3 rounded-lg space-x-2 hover:bg-corn-100 hover:shadow"
        >
          <div className="grow relative">
            <button
              id="searchSubmit"
              type="submit"
              className="flex absolute inset-y-0 right-0 items-center p-3 rounded-lg hover:bg-corn-200"
            >
              <BiSearch />
            </button>
            <input
              type="text"
              id="searchNoteTitle"
              className="bg-corn-50 text-corn-900 text-sm rounded-lg focus:ring-corn-500 focus:border-corn-500 block w-full px-4 py-2.5 hover:bg-corn-100"
              placeholder="Cari Catatan"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
