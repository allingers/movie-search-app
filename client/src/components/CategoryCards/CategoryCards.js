import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CategoryCards.css";

function CategoryCards() {
  return (
    <>
      <h2 className="section-title">Categories:</h2>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "20rem" }}>
              {/* <Card.Body className="category-card-body">
                <Card.Title>
                  <h4 className="category-card-title">Card title</h4>
                </Card.Title>
              </Card.Body> */}
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2014/10/16/09/15/lens-490806_1280.jpg"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CategoryCards;
