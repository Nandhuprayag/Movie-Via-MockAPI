import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function MovieDetails({movieList}) 
{
  //Syntax for Useparams from URL Parameter
  const { id } = useParams();//Extract ID from URL

  const movie=movieList[id];//declaring the variable Movie and storing the movieList Data
  console.log(movie)
  //useNavigate to another Page
  const navigate=useNavigate();
  return (
    <div>
      <iframe title ='RRR' width="100%" height="500px"src={movie.trailer} alt={movie.trailer}></iframe>
    <div className='movie-detail'>
    <div className='movie-spec'>
      <h2 className='movie-name'>{movie.name}</h2>
      <p className='movie-rating'>⭐ {movie.rating}</p>
    </div>
    <p className='movie-summary'>{movie.summary}</p>
    <Button variant="outlined" 
    startIcon={<ArrowBackIosNewIcon />}
    onClick={()=> navigate(-1)}>
  BACK
</Button>
    </div>
    </div>
  );
}
