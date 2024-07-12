import biblioteca  from "../../public/imag/imagem-bibliot.jpg";



function Home(){
    
    return(
        <main className="home">
            <h1>Home</h1>
            <div>
                <img src={biblioteca} alt="Imagem de uma Biblioteca" width="800"/>
            </div>
        </main>
        
    );
}

export default Home;