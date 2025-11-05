function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSearch === "function") onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex items-center">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded-md w-72"
      />
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
