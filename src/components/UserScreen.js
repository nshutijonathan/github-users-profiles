import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getUser } from "../helpers/users";
const UserScreen = ({ user }) => {
  const [userObj, setUserObj] = useState({});
  useEffect(() => {
    const fetchItems = async () => {
      const results = await getUser(user.name || user.login);
      setUserObj(results);
    };
    fetchItems();
  }, [user.login, user.name]);
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>Username:{user.name || user.login}</Card.Title>
        <Card.Text>Name:{userObj.name}</Card.Text>
        <Card.Text>Followers:{userObj.followers}</Card.Text>
        <Card.Text>Following:{userObj.following}</Card.Text>
        <Card.Text>Repos:{userObj.public_repos}</Card.Text>
        <Card.Text>Company:{userObj.company}</Card.Text>
        <a
          href={user.html_url}
          className="btn btn-info"
          target="_blank"
          role="button"
          rel="noreferrer"
        >
          Check User
        </a>
      </Card.Body>
    </Card>
  );
};

export default UserScreen;
