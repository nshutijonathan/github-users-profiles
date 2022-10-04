import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "./Loader";
import UserScreen from "./UserScreen";
import SearchBox from "./SearchBox";
import { getUsers } from "../helpers/users";
const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const results = await getUsers();
      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <>
      <h1>Github Users</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBox setItems={setItems} />
          <Row>
            {items.length < 1 ? <p>No results found!</p> : ""}
            {items.map((user) => (
              <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
                <UserScreen user={user} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
