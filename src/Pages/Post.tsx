import { Box, Card } from "@mui/material";
import Titulo from '../Components/Titulo'
import Lista from '../Components/Lista'


export default function PagePost() {
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignContent: 'center', alignItems: 'center', margin: "1%" }}>

                <Titulo texto="Lista de Posts"></Titulo>
                <Card sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', margin: "1%" }}>

                    <Lista></Lista>

                </Card>
            </Box>
        </div>
    );
}
