import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosConfing/instance";
const Listproducts = () => {
  const navigate = useNavigate();

  const [Movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // return promise

    instance
      .get(
        `/movie/popular?page=${currentPage}` /*,{params : {limit : 5 }} here make control to the return data with limit */
      )
      .then((res) => {
        console.log(res);
        setMovie(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <>
      {/* {products.map((prod) => {})} */}
      {/* Listtt  */}
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {Movie.map((mov) => (
            <Col key={mov.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${mov.backdrop_path}`}
                />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Title>Language: {mov.original_language}</Card.Title>
                  <Card.Title>Date: {mov.release_date}</Card.Title>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/details/${mov.id}`);
                    }}
                  >
                    Details{" "}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-around mt-3 pb-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              console.log(currentPage);
            }}
          >
            previous
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              console.log(currentPage);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Listproducts;
