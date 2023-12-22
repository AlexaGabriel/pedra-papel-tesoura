'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const valores = ["tesoura", "pedra", "papel"];
  const [escolhaAleatoria, setEscolhaAleatoria] = useState(null);
  const [result, setResult] = useState(null);


  function selecionar(valor) {
    return function () {
      const indiceAleatorio = Math.floor(Math.random() * valores.length);
      const escolha = valores[indiceAleatorio];
      setEscolhaAleatoria(escolha);
      if(escolha === valor){
        setResult(`empate, seu adversario escolheu ${escolha} e você escolheu ${valor}`)
      }
      else if(escolha === "pedra" && valor === "papel"){
        setResult(`você Ganhou, seu adversario escolheu ${escolha} e você escolheu ${valor}`)
      }
      else if(escolha === "tesoura" && valor === "pedra"){
        setResult(`você Ganhou, seu adversario escolheu ${escolha} e você escolheu ${valor}`)
      }
      else if(escolha === "papel" && valor === "tesoura"){
        setResult(`você Ganhou, seu adversario escolheu ${escolha} e você escolheu ${valor}`)
      }else{
        setResult(`você perdeu, seu adversario escolheu ${escolha} e você escolheu ${valor}`)
      }
      }
  }
  return (
    <>
      <h1>olá, seja bem vindo ao Pedra Papel Tesoura</h1>

      <main>
        <button onClick={selecionar("tesoura")}>
          <Image
            priority={true}
            src="/Tesoura.jpeg"
            sizes="18.665vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={250}
            height={250}
            alt='Tesoura'
          />
        </button>
        <button onClick={selecionar("pedra")}>
          <Image
            priority={true}
            src="/pedra.jpeg"
            sizes="35vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={250}
            height={250}
            alt='Pedra'
          />
        </button>
        <button onClick={selecionar("papel")}>
          <Image
            priority={true}
            src="/OIG.jpeg"
            sizes="35vw"
            style={{
              width: '100%',
              height: '100%',
            }}
            width={250}
            height={250}
            alt='Papel'
          />
        </button>
      </main>
      <p>Resultado: {result}</p>
    </>
  );
}
