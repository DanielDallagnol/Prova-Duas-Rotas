import { Typography } from "@mui/material";

interface TitleProps {
  texto: string;

}

export default function ComponentTitle({ texto }: TitleProps) {
  return (
    <div>
      
      <Typography sx={{}} variant="h3" component="h2">
        {texto}
      </Typography>

      
    </div>

  );
}
