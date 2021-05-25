import { SearchWrapper, Input } from "./SearchBar.styles";

const SearchBar = ({ ...restProps }) => {
  return (
    <SearchWrapper>
      <Input {...restProps} />
    </SearchWrapper>
  );
};

export default SearchBar;
