import React from 'react';

import { InputWithLabel } from '../InputWithLabel/index';

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      label="Search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>

    &nbsp;

    <button type='submit' disabled={!searchTerm}>
      Search
    </button>
  </form>
)

export { SearchForm };