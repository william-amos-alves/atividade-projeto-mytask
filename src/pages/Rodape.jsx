import { NavLink } from "react-bootstrap";


function Rodape(){
    return(
        <section>           
            <p className="rodape"> Desenvolvido por William Amós 
                 <a className="politica" 
                 NavLink href="/privacidade" >Politica de Privacidade</a></p>
           
        </section>
    );
}

export default Rodape;