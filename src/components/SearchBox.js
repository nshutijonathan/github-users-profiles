import React, { useState } from "react";
import { searchUsers, searchRepos } from "../helpers/users";
const SearchBox = ({ setItems }) => {
  const [keyword, setKeyword] = useState("");
  const submiHandler = async (e) => {
    e.preventDefault();
    if (keyword) {
      const results = await searchUsers(keyword.trim());
      setItems(results.items);
    }
  };
  const handleReactContributors = async () => {
    const repoResults = await searchRepos();
    setItems(repoResults);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <section className="search">
      <form onSubmit={submiHandler}>
        <input
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Users....."
          className="mr-sm-2 ml-sm-5"
        />
        <button
          type="submit"
          variant="outline-success"
          className="btn btn-primary  mr-1"
        >
          Search
        </button>

        <button
          variant="outline-success"
          className="btn btn-primary"
          onClick={refreshPage}
        >
          Clear Search
        </button>
        <m></m>
        <label>
          <input
            class="form-check-input"
            type="checkbox"
            onClick={handleReactContributors}
          />
          React Contributors
        </label>
      </form>
    </section>
  );
};

export default SearchBox;
