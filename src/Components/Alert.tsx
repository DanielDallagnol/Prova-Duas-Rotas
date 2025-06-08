import { Alert } from "@mui/material";

interface ButtonsProps {
    
    texto: string;

  }
  
  export default function ComponentAlert({texto }: ButtonsProps) {
    return (
      
        <Alert variant="filled" severity="info">
        {texto}
      </Alert>
    );
  }