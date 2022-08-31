//
import { Movie } from "./Movie"
export function MovieList({movieList})
{
 



    return(
        <div className="movie-list">
              {movieList.map((mv, index) => (
            <Movie movie={mv} key={index} id={index}/>
          ))}

        </div>
      
    )
}