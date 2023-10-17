import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import instance from "../../axiosConfing/instance";
const Details = () => {
  const { id } = useParams();
  //   console.log(id);
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await instance.get(`/movie/${id}`);
        console.log(res);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, []);
  return<>
  <div className="container" style={{alignItems:"center"}}>

  <h1> {Movie.title}</h1>   
  <img  src={`https://image.tmdb.org/t/p/w500/${Movie.backdrop_path}`}/>
   <h3> {Movie.overview}</h3>
  </div>
     
  </>
};

export default Details;
