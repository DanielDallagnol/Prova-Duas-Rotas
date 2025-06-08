import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface ButtonsProps {

    titulo:String
    textoMeio:String;

  }
  
  export default function ComponentButton({titulo,textoMeio }: ButtonsProps) {
    return (
      <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {textoMeio}
          </Typography>
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
      </div>

    );
  }
  