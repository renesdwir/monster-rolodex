import "./SearchBox.css";
interface SearchBoxTypes {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function SearchBox({ onChangeHandler }: SearchBoxTypes) {
  return (
    <div className="searchbox-wrapper">
      <input
        type="search"
        onChange={onChangeHandler}
        placeholder="Search Monster"
      />
    </div>
  );
}

export default SearchBox;
