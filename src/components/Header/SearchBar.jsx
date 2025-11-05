import '@globalStyles/reset.css'

import { Search } from "lucide-react";
export const SearchBar = ({className}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <form className={`searchBar ${className || ''}`}onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Pesquisar produto..." />
      <button type="submit">
        <Search color="#CCCCCC"></Search>
      </button>
    </form>
  );
};