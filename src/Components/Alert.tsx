import { Alert,  LinearProgress } from "@mui/material";

interface ButtonsProps {
    
    texto: string;

  }
  
  export default function ComponentAlert({texto }: ButtonsProps) {
    return (
        <div>

            
        <Alert variant="filled" severity="warning">
        {texto}
      </Alert>
      <LinearProgress  color="warning" />
      </div>
    );
  }