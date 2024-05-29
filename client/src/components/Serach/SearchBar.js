import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Form className="d-flex mt-4 mb-4">
      <FormControl
        type="search"
        placeholder="Sök film..."
        className="mr-2"
        aria-label="Sök"
      />
    </Form>
  );
};

export default SearchBar;
