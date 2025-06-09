import Box from '../Components/Box'
import Titulo from '../Components/Titulo'
import Button from '../Components/Button'


export default function PagePrimeiraPagina() {
    return (
        <div>
            <Box>
                <Titulo texto='Aplicação em TypeScript' fontWeight="bold" ></Titulo>
                <Titulo texto='com duas rotas' fontWeight="lighter"></Titulo>

                <Button onClick={ () => {} } texto={'INICIAR'}></Button>
            </Box>

     </div>
    )

}