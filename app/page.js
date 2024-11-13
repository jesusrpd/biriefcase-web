import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Esta página se encuetra en remodelación.</h1>
      <div>
        <p>Mientras trabajo en la remodelación de mi sitio, puedes ver la imagen de un diseño en el que se esta trabajando.</p>
        <img src="/img/sitebriefcase.jpg" width="200px"/>
      </div>
      <span>Si deseas contactarme te dejo mi linkedin. <a href="https://www.linkedin.com/in/jesus-rodrigo/" className="bg-cyan-500 p-2 rounded-md">Linkedin</a></span>
    </div>
  );
}
