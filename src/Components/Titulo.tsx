import { Typography } from "@mui/material";

interface TitleProps {
  texto: string;
  fontWeight?: string | number; // pode ser 'bold', 'normal', 400, 700 etc.
}

export default function ComponentTitle({ texto, fontWeight = 'bold' }: TitleProps) {
  return (
    <div>
      <Typography
        sx={{ color: 'white', fontWeight, fontFamily: 'Poppins, sans-serif'}}
        variant="h3"
        component="h2"
      >
        {texto}
      </Typography>
    </div>
  );
}

