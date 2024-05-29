import Card from "react-bootstrap/Card";

function MovieCard() {
  return (
    <Card style={{ width: "16rem", height: "25rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg"
        style={{ height: "50%" }}
      />
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text className="movie-genrer">Genrer, Genre 2 </Card.Text>

        <Card.Text className="movie-description">
          Some quick example text to build on the card title...
        </Card.Text>
        <Card.Text className="movie-length">1h 25min</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
