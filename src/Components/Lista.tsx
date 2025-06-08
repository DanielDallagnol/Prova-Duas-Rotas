import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';


type PostaDados = {
    id: number;
    title: string;
    body: string;
    // pode adicionar mais se quiser
  };





export default function ComponentList() {
  //ANTIGA TAVA ASSIM: const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState<PostaDados[]>([]);



///Isso pega os dados da API assim que o componente é montado.

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (

   


    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper',background:'#f0f0f0aa'}}>
    

    {/*Substituí o array fixo [1, 2, 3] que veio no componente original pelo array posts:*/}
      {posts.map((postaDados) => (      
        <ListItem
          key={postaDados.id}  
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >

            {/*AQUI Q ELE PEGA O LINK QUE VAI ENVIAR*/}
          <Link
            to={`/dados/${postaDados.id}`}
            style={{ textDecoration: 'none', color: 'inherit'}}
          >
            <ListItemText primary={postaDados.title} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
