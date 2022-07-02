import React from 'react'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getAllLatestMovies } from "../Redux/Home/Action"

const Home = () => {

  const dispatch = useDispatch()
  const{movies,isLoading,isError} = useSelector((state) => state.movies)

    React.useEffect(()=>{
          dispatch(getAllLatestMovies())
    },[dispatch])


    if (isLoading){
      return <h3>loading....</h3>
    }

    if(isError){
      return <h3>error....</h3>
    }
  return (
    <div style = {{marginTop:"100px", display:"grid",gap:"20px",gridTemplateColumns:"repeat(3,1fr)"}}>
      {
        movies.map((movie) => (<div style = {{display:"flex",flexDirection:"column"}} key = {movie.id}>

            <img style = {{width:"300px",height:"300px"}}src = {movie.poster_path} />
            {movie.title}
            <Link to = {`/movie/${movie.id}`}><button style = {{border:"none",cursor:"pointer",color:'white',padding:"0.5rem",width:"30%",borderRadius:"0.5rem",background:"green"}}>More Details</button></Link>
           
           
           </div>))
      }
    </div>
  )
}

export default Home
