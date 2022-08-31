import { color } from "@mui/system";
import Button from '@mui/material/Button';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function Movie({ movie, id }) {

  //Onclick function for show/setshow and expand less ,more icons
  const [show,setShow]=useState(true) ;
  const navigate=useNavigate();
  //Styling for the Button
  // const Button_style={
  //   display:"block"
  // }

   //Conditional Rendering for Rating style
  const rating_style={
    color:movie.rating >= 8? "green" :"red"
  }
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.poster} />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name} - ID {id}
      <IconButton color="primary" 
      aria-label="Toggle Description"
      onClick={() => setShow(!show)}>
       {show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
      </IconButton>
       
      <IconButton color="primary" 
      aria-label="Toggle Description"
      onClick={() => navigate(`/Movie/${id}`)}>
      <InfoIcon/>
      </IconButton>
      </h2>
      <p style={rating_style}>⭐ {movie.rating}</p>

     </div>
      {show ?<p className="movie-summary">{movie.summary}</p>: null}
      <div className="movie-end">
      <Counter/>
      <IconButton color="primary" 
      onClick={() => navigate('/movie/:id')}>
      <DeleteIcon/>
      </IconButton>
      <IconButton color="primary" 
      onClick={() => navigate('/movie/:id')}>
      <EditIcon/>
      </IconButton>
      </div>
    </div>
  );
}
