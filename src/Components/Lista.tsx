import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography,} from '@mui/material';
import React from 'react';

type PostaDados = {
  id: number;
  title: string;
  body: string;
};

export default function ComponentList() {
  const [posts, setPosts] = useState<PostaDados[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
      {posts.map((postaDados, index) => (


        <React.Fragment key={postaDados.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>

              {/* Avatar genérico com uma letra */}

              <Avatar>{postaDados.title.charAt(0).toUpperCase()}</Avatar>
            </ListItemAvatar>


            <ListItemText
              primary={
                <Link
                  to={`/dados/${postaDados.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {postaDados.title}
                </Link>
              }


              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Autor desconhecido
                  </Typography>
                  {` — ${postaDados.body.slice(0, 50)}...`}
                </React.Fragment>
              }
            />
          </ListItem>




          {/*só pra deixar bonito e não ultrapassar o tamanho do box*/}
          {index < posts.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}
