import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchProps {
  shouldClear: boolean;
}

const Search = ({ shouldClear }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (shouldClear && location.pathname !== "/search") {
      setSearchTerm("");
    }
  }, [shouldClear, location]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm) {
        navigate("/search?s=" + searchTerm);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, navigate]);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value);
  };

  return (
    <div id="search">
      <label>Keresés</label>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
