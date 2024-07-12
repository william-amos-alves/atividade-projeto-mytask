import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import Notfound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdicionarTarefa from "./pages/AdicionarTarefa";
import Privacidade from "./pages/Privacidade";
import Rodape from "./pages/Rodape";

// BrowserRouter: componete essencial para conduzir o reteamento no navegador.
// Routes: são rotas;
// Route: indicamos a rota (path) e o elemneto que será exibido na tela.
// SPA: Single-Page Application
function App(){

  return(
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/login" element={<Login />} />
          <Route path= "/cadastro" element={<Cadastro />} />
          <Route path= "/ajuda" element={<Ajuda />} />
          <Route path="/privacidade" element={<Privacidade/>} />
          <Route path="/adicionarTarefa" element={<AdicionarTarefa/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Rodape/>
      </BrowserRouter>
    </>
  );
}

export default App;

