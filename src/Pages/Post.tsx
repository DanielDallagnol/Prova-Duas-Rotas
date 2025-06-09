import { Box, Card } from "@mui/material";
import Titulo from '../Components/Titulo'
import Lista from '../Components/Lista'


export default function PagePost() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center', margin: "1%" }}>
                <Box sx={{display: 'flex', flexDirection: 'row',gap:2}}>
                    <Titulo texto="LISTA " fontWeight="bold" ></Titulo>
                    <Titulo texto="de POSTS" fontWeight="lighter"></Titulo>
                </Box>

                <Card sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', margin: "1%" }}>

                    <Lista></Lista>

                </Card>
            </Box>
        </div>
    );
}
