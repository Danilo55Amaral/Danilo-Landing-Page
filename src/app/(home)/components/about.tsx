import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Separator />
      <div className="flex justify-center">
        <div className="flex items-center justify-center mt-10 mb-10 w-5/6 bg-[#31241E] rounded-lg">
          <div className="md:flex gap-6 w-11/12 pt-10 pb-10">
            <div id="text">
              <h1 className="text-white  text-left text-2xl  md:text-4xl font-bold">
                Sobre mim
              </h1>
              <p className="text-white text-justify mt-3">
                Me chamo Danilo Amaral tenho 27 anos e sou natural de Vitória de
                Santo Antão Pernambuco, sou graduado em Análise e
                Desenvolvimento de Sistemas pelo Centro Universitário Leonardo
                Da Vinci (UNIASSELVI) e Pós graduado em Ciência de Dados também
                pela mesma instituição.
                <br />
                <br />
                Desenvolvedor web tenho experiência em desenvolvimento front-end
                com projetos pessoais e como freelancer utilizando tecnologias
                modernas como React, Next, Typescript, Styled-Components,
                Tailwind CSS e outras ferramentas utilizadas no front end.
                Estagiei na CMTECH onde adquirir experiência no back end com php
                utilizando o ScriptCase que é um gerador de aplicações que
                suporta o Licenciamento Ambiental de Pernambuco, além disso
                também utilizei MySQL e Workbench. Dentro da CMTECH trabalhei
                com metodologia SCRUM onde pude ter vivência com essa
                metodologia ágil para o desenvolvimento de software.
                <br />
                Hoje estudo tecnologias back end como Node.js, criação de API
                RESTful com Node.js, tecnologias como Fastify, Knex, Zod,
                SQLite, PostgreSQL, realização de testes automatizados, testes
                e2e e testes unitários utilizando bibliotecas como Vitest.
                <br />
                <br />
                Iniciei na área de TI em 2019 quando trabalhei na Brisanet
                telecomunicações e comecei a aprender sobre redes de
                computadores, tecnologia wireless e tecnologia fibra óptica.
                Iniciei meus estudos na área de TI em Análise e Desenvolvimento
                de Sistemas e pude aprender mais sobre o mundo da programação e
                me tornar um programador.
                <br />
                <br />
                Atualmente trabalho como freelancer desenvolvendo sistemas web e
                buscando a melhor solução em tecnologia para meus clientes,
                entre em contato comigo agora mesmo e comece a sua transformação
                digital.
              </p>
            </div>
            <Image
              src="/perfil.png"
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[80%] lg:max-h-[60%] w-auto max-w-[100%] lg:max-w-[40%]"
              style={{
                objectFit: "contain",
              }}
              alt="Astronauta"
            />
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
