import React from "react";
import { MdSearch } from "react-icons/md";
import {
  SearchContainer,
  SearchWrapper,
  SearchIcon,
  SearchInput,
} from "./Styled.WishlistSearchBar";

const WishlistSearchBar = ({
  value,
  onChange,
  placeholder = "Search your favorites...",
}) => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIcon>
          <MdSearch size={24} />
        </SearchIcon>
        <SearchInput
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </SearchWrapper>
    </SearchContainer>
  );
};

export default WishlistSearchBar;
