import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieCard/MovieCard.css";

function MovieGrid() {
  return (
    <>
      <h2 className="section-title">Movies</h2>

      <Row xs={1} md={5} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <MovieCard />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MovieGrid;
