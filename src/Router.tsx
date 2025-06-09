import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Post from './Pages/Post'
import Dados from './Pages/Dados'
import PrimeiraPagina from './Pages/PrimeiraPagina'



export function ExportaRouter() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PrimeiraPagina />} />
        <Route path="/post" element={<Post />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/dados/:id" element={<Dados />} />


        <Route path="*" element={<h2 color='black'>404 Página não encontrada</h2>} />
      </Routes>
    </Router>
  )
}

