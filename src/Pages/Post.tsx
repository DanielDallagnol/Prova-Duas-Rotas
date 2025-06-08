import { Box } from "@mui/material";
import Titulo from '../Components/Titulo'
import Lista from '../Components/Lista'
import Button from '../Components/Button';

export default function PagePost() {
    return (
      <div>
        <Box sx={{display:'flex', flexDirection:'column', gap:5, alignContent:'center', alignItems:'center'}}>
            <Titulo texto="Lista de Posts"></Titulo>
            <Lista></Lista>
        </Box>     
      </div>
    );
  }
  