import { useState } from 'react';
import Link from 'next/link';

function Sobre() {
    return 
    ( 
      <div>
        <h1>Sobre</h1> 
        <Link href="/home">
        <a>Acessar página Home</a>
        </Link> 

        <Contador />
      </div>
    )
}

export default Sobre