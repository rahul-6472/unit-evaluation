import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"



const MovieDetails = () => {
    const {id} = useParams()
    const [movieDetails,setMovieDetails] = React.useState({})
    const [movieBookedDetails,setMovieBookedDetails] = React.useState({})
    useEffect(()=>{
       fetch (`http://localhost:8080/movies/${id}`)
       .then((res) => (res.json()))
       .then ((res) =>setMovieDetails(res))
    },[id])


    useEffect(()=>{
      fetch (`http://localhost:8080/moviesBooked/${id}`)
      .then((res) => (res.json()))
      .then ((res) =>setMovieBookedDetails(res))
   },[id])
   console.log(movieBookedDetails)

  return (
    <div>
       <h1 style = {{color: "teal",marginTop:"80px"}}>Movie Details</h1>
       {
           
          <div style = {{marginTop:"px",display:"flex", flexDirection:"column"}} >
             <img  style = {{width:"300px",height:"300px"}} src = {movieDetails.poster_path} alt = "poster"/>
             <p>{movieDetails.title}</p>
            <p> {movieDetails.original_title}</p>
             <p>{movieDetails.release_date}</p>
             <p style = {{width:"40%",textAlign:"left"}}>{movieDetails.overview}</p>
             <p>{movieDetails.vote_count}</p>

       
             <buton></buton>
            </div>
           
       }
    </div>
  )
}

export default MovieDetails
