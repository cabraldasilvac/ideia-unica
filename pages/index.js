import { useState } from 'react';
import Link from 'next/link';

function Home(){
    return(<div><h1>Home</h1>
    <Link href="/sobre">
        <a>Acessar a página Sobre</a>
        </Link>
        <br/><Contador />   
    </div>)
}
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador ++);
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