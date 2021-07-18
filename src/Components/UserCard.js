import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: "30%" }}>
      <Card.Body>
        <Card.Title>{user.name} </Card.Title>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{user.address.street} </ListGroupItem>
        <ListGroupItem>{user.phone} </ListGroupItem>
        <ListGroupItem>{user.company.name} </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
