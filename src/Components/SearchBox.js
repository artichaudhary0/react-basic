import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBox = (props) => {
  console.log("props", props);
  return (
    <>
      <Box mb={4}>
        <TextField
          size="medium"
          type="text"
          name="search-box"
          placeholder="Search for Video Titles"
          value={props.searchText}
          onChange={props.handleInput}
        />
      </Box>
    </>
  );
};

export default SearchBox;
