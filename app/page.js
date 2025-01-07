import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full p-5 bg-red-600 font-bold text-white text-center">¡Este sitio se encuentra en construcción, para más información de mi perfil descargar mi CV de favor. !</div>
      <section className="w-full h-screen bg-mainMobile bg-cover flex items-center flex-col justify-center">
        <div className="my-5">
          <Image
            src="/img/img-profile.png"
            width={270}
            height={270}
            alt="Img profile Rodrigo Pérez"
            className="mix-blend-lighten"
          />
        </div>
        <div className="my-5 text-center">
          <h3 className="text-xl text-red-600 font-bold my-3">Hello I´m</h3>
          <h1 className="text-xl font-bold my-3">Jesús Rodrigo Pérez Delgado</h1>
          <p className="text-sm my-3">CAD Engineer & Student of Mechanical Enginer</p>
          <a className="py-1 px-4 bg-cyan-600 font-bold my-3" href="/files/CV-JesúsRodrigoPérezDelgado.pdf" download="CV-JesúsRodrigoPérezDelgado.pdf" rel="noopener noreferrer" target="_blank">Download CV</a>
        </div>
        <div className="my-5 flex w-full justify-around">
          <Image
            src="/icons/github.svg"
            width={30}
            height={30}
            alt="Github icon"
          />
          <Image
            src="/icons/linkedin.svg"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
          <Image
            src="/icons/whatsapp.svg"
            width={30}
            height={30}
            alt="Whatsapp icon"
          />
          <Image
            src="/icons/gmail.svg"
            width={30}
            height={30}
            alt="Gmail icon"
          />
        </div>
        <div className="font-bold relative">
          <p>More...</p>
        </div>
      </section>
      <section className="bg-white">
        <h2 className="text-center text-red-600 mb-5 font-bold text-2xl">ABOUT ME</h2>
        <p className="text-black px-4 text-justify leading-8 pb-40">
        I am currently a student of Mechanical Engineering at the National Polytechnic Institute, since I was a child I started working, starting in the programming area teaching classes, as an intern in systems and working as a web programmer FreeLancer.
        <br/><br/>
        Since I started my career I have taken a different approach, participating in different projects both nationally and internationally, where I have designed and manufactured Pico satellites for their competition, plus in my free time I like to design mechanisms or parts that are of my interest. Thanks to my effort in this area I am working as a SolidWorks Designer in GEMA MEXICO.
        <br/><br/>
        I am a proactive person, self-taught, who likes to work in a team and participate in various projects that are of my liking and interest, I always give the best of me and I am willing to learn new things, because for me it never ends to learn something new.
        </p>
      </section>
      <section className="min-h-screen min-w-full bg-waveProjectMobile bg-top bg-no-repeat">
        <h2 className="text-center pt-14 font-bold">PROJECTS</h2>
        <div className="w-full bg-blueSections flex flex-col items-center justify-center">
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
        </div>
        <div className="bg-blueSections">
          <h2 className="font-bold text-center">Events and Competitions</h2>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
            <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
            <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
            <div className="w-96 h-56 bg-white rounded-lg m-5"></div>
          </div>
        </div>
        <div className="bg-blueSections">
          <h2 className="font-bold text-center">Skills and Softwares</h2>
          <div className="slider">
	<div className="slide-track">
		<div className="slide">
        <Image
            src="/img/softwares/catia.png"
            width={30}
            height={30}
            alt="Linkedin icon"
        />
		</div>
		<div className="slide">
        <Image
            src="/img/softwares/excel.png"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
		</div>
		<div className="slide">
        <Image
            src="/img/softwares/hypermesh.png"
            width={30}
            height={30}
            alt="Linkedin icon"
        />
		</div>
		<div className="slide">
    <Image
            src="/img/softwares/inspire.png"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
		</div>
		<div className="slide">
    <Image
            src="/img/softwares/js.png"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
		</div>
		<div className="slide">
    <Image
            src="/img/softwares/python.png"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
		</div>
		<div className="slide">
    <Image
            src="/img/softwares/solidedge.png"
            width={30}
            height={30}
            alt="Linkedin icon"
          />
		</div>
		<div className="slide">
      <Image
            src="/img/softwares/solidworks.png"
            width={30}
            height={30}
            alt="Linkedin icon"
              />
          </div>
        </div>
      </div>
        </div>
      </section>
    <section className="bg-gray-600">
      <h2>Interest</h2>
      <div>
        <ul>
          <li>CAD Designer</li>
          <li>Mechanical Engineer</li>
          <li>Finite Element Method</li>
          <li>Team work</li>
          <li>Programing</li>
          <li>IA</li>
          <li></li>
        </ul>
      </div>
      <div>
        <h3>Contact me</h3>
        <form>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <button>Send request</button>
        </form>
      </div>
    </section>
    </div>
  );
}
