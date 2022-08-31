import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from 'react';

export function Counter() {
  //Declare Like and Dislike buttons 
  const [like,setLike]=useState(0);
  const [Dislike,setDisLike]=useState(0);
  return (
    <div>
      <IconButton  
      onClick={() => setLike(like + 1)} 
      className="bt-sz-lg"
      aria-label="like button"
      color="primary">
  <Badge badgeContent={like} color="primary"> 👍</Badge></IconButton>
    
  <IconButton  
      onClick={() => setDisLike(Dislike + 1)} 
      className="bt-sz-lg"
      aria-label="like button"
      color="primary">
  <Badge badgeContent={Dislike} color="primary">  👎</Badge></IconButton>
   </div>
  );
}
