import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";
import {Randomfox} from  "./Componentfox";

const random = () => Math.floor(Math.random() * 122) + 1;

export default function Home() {
  const [imagen, setImagen] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <div>
      <main className=" text-4xl font-bold">
        <h1>Hello Platzi</h1>
        {imagen.map((img, index) => ( 
          <div key={index} className="p-4">
            <Randomfox img={img}/>
          </div>
        ))}


        <Randomfox img={`https://randomfox.ca/images/${random}.jpg`}/>
      </main>
      
    </div>
  );
}
