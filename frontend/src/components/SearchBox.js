import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState(" ");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="search__box">
      <Form.Group controlId="search">
        <Form.Control
          placeholder="Search Products..."
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="search_input"
        ></Form.Control>
      </Form.Group>
      <Button variant="outline-success" type="submit" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
