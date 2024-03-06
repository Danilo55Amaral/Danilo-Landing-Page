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
                Me chamo Danilo Amaral tenho 28 anos e sou natural de Vitória de
                Santo Antão Pernambuco, sou graduado em Análise e
                Desenvolvimento de Sistemas pelo Centro Universitário Leonardo
                Da Vinci (UNIASSELVI) e Pós graduado em Ciência de Dados também
                pela mesma instituição.
                <br />
                <br />
                Desenvolvedor web tenho experiência em desenvolvimento front-end 
                com projetos pessoais e com consultorias utilizando tecnologias 
                modernas como React, Next, Typescript, Styled-Components, Tailwind CSS 
                e outras ferramentas utilizadas no front end. Como consultor já atuei em 
                projetos de loja virtual, portfólio e sistema de CRM.
                <br />
                Estagiei na CMTECH onde adquirir experiência no front end e back end, com ScriptCase
                 que é um gerador de aplicações low code, que gera código em php, JavaScript, Css, Ajax 
                 e Html, para o ERP Silia, que gerenciava o Licenciamento Ambiental de Pernambuco e que 
                 atendia cerca de 40.000 empresas. Além disso também utilizei o banco de dados MySQL com 
                 a interface Workbench. Dentro da CMTECH trabalhei com metodologia SCRUM (09/2021 a 06/2022) 
                 em uma equipe com cerca de 10 pessoas, onde pude ter vivência com metodologia ágil para o 
                 desenvolvimento de software. Minhas entregas foram feitas nos sistemas Silia (ERP) e 
                 SiliaWeb (sistema de solicitação da licença ambiental, transações sem papel).
                <br />
                <br />
                Iniciei na área de TI em 2019 quando trabalhei na Brisanet
                telecomunicações e comecei a aprender sobre redes de
                computadores, tecnologia wireless e tecnologia fibra óptica.
                Iniciei meus estudos na área de TI em Análise e Desenvolvimento
                de Sistemas e pude aprender mais sobre o mundo da programação e
                me tornar um programador.
                <br />
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
