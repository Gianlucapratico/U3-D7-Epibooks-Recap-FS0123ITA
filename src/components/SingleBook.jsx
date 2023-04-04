import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        onClick={() => {
          props.changeSelectedBook(props.book.asin);
          setSelected(!selected);
        }}
        style={{
          border:
            props.selectedBook === props.book.asin
              ? "3px solid red"
              : "3px solid #ebebeb",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {<CommentArea />}
      {/* {selected && <CommentArea asin={props.book.asin} />} */}
    </>
  );
};

export default SingleBook;
