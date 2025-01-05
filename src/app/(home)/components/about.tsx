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
                Meu nome é Danilo Amaral, tenho 28 anos e sou natural de Vitória
                de Santo Antão, Pernambuco. Sou graduado em Análise e
                Desenvolvimento de Sistemas pelo Centro Universitário Leonardo
                Da Vinci (UNIASSELVI) e pós-graduado em Ciência de Dados pela
                mesma instituição.
                <br />
                <br />
                Desenvolvedor web tenho experiência em desenvolvimento
                full-stack com projetos pessoais e consultorias, utilizando
                tecnologias modernas como React, Next, TypeScript, Node.js,
                MySQL, Docker e outras ferramentas utilizadas no mercado. Como
                consultor, já atuei em projetos de loja virtual, portfólio,
                sistema de CRM e desenvolvi um sistema de painel eletrônico para
                a Câmara Municipal do município de Chã de Alegria.
                <br />
                Durante meu estágio na CMTECH (setembro de 2021 a junho de
                2022), adquiri experiência em desenvolvimento front-end com
                React, JavaScript e TypeScript, e back-end utilizando Php e
                ScriptCase, um gerador de aplicações low-code. Trabalhei com o
                ERP Silia, gerenciando o licenciamento ambiental de Pernambuco
                para cerca de 40.000 empresas. Além disso, utilizei o banco de
                dados MySQL com a interface Workbench e desenvolvi habilidades
                na metodologia SCRUM em equipe.
                <br />
                <br />
                Iniciei minha jornada na área de TI em 2019, na Brisanet
                Telecomunicações, onde aprendi sobre redes de computadores,
                tecnologia wireless e fibra óptica. A partir daí, despertei meu
                interesse pela programação, comecei a minha graduação em Análise
                e Desenvolvimento de Sistemas, e me transformei em um
                desenvolvedor.
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
