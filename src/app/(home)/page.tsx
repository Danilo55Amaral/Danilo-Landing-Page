"use client";

import Banner from "./components/banner";
import { Button } from "@/components/ui/button";
import About from "./components/about";
import Skills from "./components/skills";
import { TypeAnimation } from "react-type-animation";
import Portfolio from "./components/portfolio";
import { CallCenter } from "@/components/call-center";
import Link from "next/link";
import Certification from "./components/certification";
import Recommendation from "./components/recommendation";
import Faq from "./components/faq";
import TraceDiagram from "./components/trace-diagram";

export default function Home() {
  return (
    <>
      <Banner src="/image-background.png" alt="Imagem de Fundo" />
      <section id="home" className="flex items-center h-full justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full z-10 absolute inset-x-0 mx-auto max-w-6xl px-6 lg:px-10 gap-10 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2 w-full">
            <h1 className="text-amber-400 font-bold text-center lg:text-left">
              Prazer,{" "}
              <span className="text-emerald-400 text-2xl [text-shadow:0_0_12px_rgba(52,211,153,0.6)]">Danilo Amaral 👨🏼‍💻</span>{" "}
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
            <p className="text-white font-semibold text-justify lg:text-left w-[90%]">
              Comecei mexendo em fibra óptica e redes wireless. Hoje construo
              sistemas web de ponta a ponta — do painel eletrônico de uma câmara
              municipal a ferramentas de controle financeiro.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-6 h-16 w-full bg-background lg:bg-transparent">
              <CallCenter />
              <Link
                href="#portfolio"
                aria-label="Link para seção de porfolio do site"
              >
                <Button variant="definitive">Portfólio</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-1/2">
            <TraceDiagram />
          </div>
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
      <section id="recommendation" className="mt-20">
        <Recommendation />
      </section>
      <section id="faq" className="mt-20 mb-40">
        <Faq />
      </section>
    </>
  );
}