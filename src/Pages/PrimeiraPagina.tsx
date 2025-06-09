import Box from '../Components/Box'
import Titulo from '../Components/Titulo'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom';


export default function PagePrimeiraPagina() {
    const navigate = useNavigate();

    return (
        <div>
            <Box>
                <Titulo texto='Aplicação em TypeScript' fontWeight="bold" ></Titulo>
                <Titulo texto='com duas rotas' fontWeight="lighter"></Titulo>

                
                <Button onClick={() => navigate('/post')} texto={'INICIAR'} />
            </Box>

     </div>
    )

}