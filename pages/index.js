import { useState } from 'react';
import Link from 'next/link';

function Home(){
    return(<div><h1>Página  Home</h1>
     <h3> <font color="red">Se você chegou até aqui saiba que esta Página é somente para testes.</font></h3><br/>
    <Link href="/sobre">
        <a>Acessar a página Sobre</a>
        </Link><br/>    
        <br/><Contador />   
    </div>)


}
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador++);
    }
        return ( 
          <div>
              <div> {contador} 
              <button onClick = { adicionarContador } > Adicionar </button>  
              </div> 
              
          </div>
    )
}

export default Home