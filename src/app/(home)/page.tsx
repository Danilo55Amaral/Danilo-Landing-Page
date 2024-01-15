import Image from "next/image";
import Banner from "./components/banner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <Banner src="/image-background.png" alt="Imagem de Fundo" />
      <section id="home" className="flex items-center h-full justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full z-10 absolute">
          <div className="flex flex-col items-center gap-6 lg:w-1/3 w-full">
            <p className="text-white font-semibold text-justify w-[90%]">
              Seja bem-vindo ao meu portfólio, conheça alguns dos meus trabalhos
              como freelancer e também alguns projetos que construir, minha
              missão é transformar de forma positiva a vida das pessoas através
              da tecnologia.
            </p>
            <div className="flex items-center justify-center gap-6 h-16 w-full bg-background lg:bg-transparent">
              <Button variant="primary">Contato</Button>
              <Button variant="primary">Portfólio</Button>
            </div>
          </div>
          <Image
            src="/image-astronauta.png"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[40%] lg:max-h-[30%] w-auto max-w-[50%] lg:max-w-[20%]"
            style={{
              objectFit: "contain",
            }}
            alt="Astronauta"
          />
        </div>
      </section>
      <section id="about" className="mt-6">
        <About />
      </section>
      <section id="skills" className="mt-6">
        <Skills />
      </section>
    </>
  );
}
