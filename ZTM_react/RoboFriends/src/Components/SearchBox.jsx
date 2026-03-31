export default function SearchBox({ inputText, OnInputTextChange }) {
  const handleOnChange = (e) => {
    OnInputTextChange(e.target.value);
  };
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={handleOnChange}
        value={inputText}
      />
    </div>
  );
}
