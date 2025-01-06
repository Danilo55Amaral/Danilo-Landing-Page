"use client";

import Image from "next/image";
import Banner from "./components/banner";
import { Button } from "@/components/ui/button";
import About from "./components/about";
import Skills from "./components/skills";
import { TypeAnimation } from "react-type-animation";
import Portfolio from "./components/portfolio";
import { CallCenter } from "@/components/call-center";
import Link from "next/link";
import Certification from "./components/certification";


export default function Home() {
  return (
    <>
      <Banner src="/image-background.png" alt="Imagem de Fundo" />
      <section id="home" className="flex items-center h-full justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full z-10 absolute">
          <div className="flex flex-col items-center gap-6 lg:w-1/3 w-full">
            <h1 className="text-white font-bold text-center">
              Prazer,{" "}
              <span className="text-blue-700 text-2xl">Danilo Amaral 👨🏼‍💻</span>{" "}
              <br />
              <TypeAnimation
                sequence={[
                  "Software Engineer 👨🏼‍💻",
                  1000,
                  "Consultor em Tecnologia ⚛️",
                  2000,
                  "Desenvolvedor de Software 🚀",
                  3000,
                  "Ciêntista de Dados 👨🏻‍🔬",
                  4000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h1>
            <p className="text-white font-semibold text-justify w-[90%]">
              Explorar, inovar, transformar. Seja bem-vindo ao meu universo
              tecnológico! Aqui você encontrará projetos impactantes e
              consultorias especializadas em tecnologia, desenvolvidos para melhorar vidas e
              impulsionar o futuro.
            </p>
            <div className="flex items-center justify-center gap-6 h-16 w-full bg-background lg:bg-transparent">
              <CallCenter />
              <Link
                href="#portfolio"
                aria-label="Link para seção de porfolio do site"
              >
                <Button variant="primary">Portfólio</Button>
              </Link>
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
      <section id="skills" className="mt-20">
        <Skills />
      </section>
      <section id="portfolio" className="mt-20">
        <Portfolio />
      </section>
      <section id="certification" className="mt-20">
        <Certification />
      </section>
    </>
  );
}
