import { Box, Card } from "@mui/material";
import Titulo from '../Components/Titulo'
import Lista from '../Components/Lista'


export default function PagePost() {
    return (
      <div>
        <Box sx={{display:'flex', flexDirection:'column', gap:5, alignContent:'center', alignItems:'center'}}>
        <Card sx={{display:'flex', flexDirection:'column', gap:5, alignContent:'center', alignItems:'center'}}>
            <Titulo texto="Lista de Posts"></Titulo>
            <Lista></Lista>
            </Card>
        </Box>     
      </div>
    );
  }
  