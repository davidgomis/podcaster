import { useState } from "react";
import "./searcher.scss";

export const Searcher = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or author"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
