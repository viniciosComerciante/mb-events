export function SearchBox() {
  return (
      <div className="relative text-gray-600 focus-within:text-gray-400 flex w-1/2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input type="text"  className="py-2 text-sm ease-in-out duration-100 text-white bg-primary-700 rounded-md pl-10 focus:outline-none placeholder- focus:bg-white focus:text-gray-900 w-full" placeholder="Pesquisar eventos acadêmicos, empresariais..."/>
      </div>
  );
}
