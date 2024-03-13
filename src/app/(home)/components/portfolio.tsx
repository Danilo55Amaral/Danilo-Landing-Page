"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImagePortfolio from "./image-portfolio";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h1 className="text-white text-2xl font-bold">
        Confira meus <span className="text-blue-700">Projetos</span>
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <span className="text-blue-700 font-semibold text-xl">Trilha Front End</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://site-junior-ribeiro.vercel.app">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/junior-rib.PNG"
                        alt="Eu Sou Junior"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Ultima entrega realizada, site de portfolio Eu Sou Junior.
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/dtmoney2.0">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/finance-02.PNG"
                        alt="Controle de Finanças"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    DT Money 2.0 (Nova versão do Sistema de controle de finanças
                    com novas funcionalidades e um visual mais clean)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Projeto-Template-Administrativo">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/template-admin01.PNG"
                        alt="Template Adiminstrativo"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Template Administrativo (Sistema administrativo com Login
                    utilizando o API firebase do Google)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Ignite-Timer">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/ignite-timer.PNG"
                        alt="Projeto temporizador"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Ignite Timer (Projeto de Temporizador)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/dtmoney">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/dt-money-01.png"
                        alt="Projeto DT Money"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Dt Money (Sistema de Controle de Finanças)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Projeto-Quiz-FullStack">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/quiz-full-01.PNG"
                        alt="Projeto Quiz"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Quiz Projeto FullStack (Quiz de Perguntas e respostas)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Monty-Hall">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/montyHall03.jpg"
                        alt="Projeto Mont Hall"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Monty Hall (Jogo da porta misteriosa, descubra em qual porta
                    está o presente)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Monty-Hall">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/projeto-lista-01.JPG"
                        alt="Projeto Lista de Tarefas"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Projeto Lista de Tarefas
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Calculadora-React">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/calculadora-react.PNG"
                        alt="Calculadora"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Calculadora (A Calculadora mais linda já criada ^-^)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Git-GitHub">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/tec02.jpg" alt="GitHub" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Versionamento de Código com Git e GitHub
                  </span>
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3">
        <span className="text-blue-700 font-semibold text-xl">Trilha Back End</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Utilizando-Docker-com-Banco-de-dados">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/docker-post01.PNG" alt="Docker" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Rodando Banco de Dados com Docker
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Api-Restful-Nodejs">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/tec02.jpg" alt="API Node" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    API Restful Nodejs (Nesse projeto foi desenvolvido uma API
                    utilizando Node com TypeScript e outras ferramentas)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Projeto-Logico-De-Banco-De-Dados">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/modelagem.PNG" alt="Modelagem" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Desafio Projeto Lógico de Banco de Dados
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Fundamentos-Nodejs">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/tec02.jpg" alt="Node Fundamentos" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Fundamentos do Nodejs (API RESTful utilizando Node.JS feita
                    a mão sem o uso de quaisquer dependências externas)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Projeto-Logico-Oficina">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio
                        src="/modelagem_oficina.PNG"
                        alt="Modelagem Oficina"
                      />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Projeto Lógico de Banco de Dados de uma Oficina
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Otimizando-Sistema-Bancario-Python">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/mybank01.PNG" alt="MyBank" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    MyBank 2.0 (O MyBank é um sistema bancário desenvolvido em
                    Python capaz de realizar algumas operações bancárias)
                  </span>
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3">
        <span className="text-blue-700 font-semibold text-xl">Trilha Cientista de Dados</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Python-para-Ciencia-de-Dados">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/pandas01.PNG" alt="Pandas" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                  Python para Ciência de Dados (Utilizando bibliotecas como Pandas e NumPy que são amplamente utilizadas em Ciência de Dados)
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Utilizando-Docker-com-Banco-de-dados">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/docker-post01.PNG" alt="Docker" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Rodando Banco de Dados com Docker
                  </span>
                </div>
              </Link>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Link href="https://github.com/Danilo55Amaral/Desafio-Projeto-Logico-De-Banco-De-Dados">
                <div className="p-1">
                  <Card className="bg-dark200 border-dark200">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <ImagePortfolio src="/modelagem.PNG" alt="Modelagem" />
                    </CardContent>
                  </Card>
                  <span className="text-xl text-white">
                    Desafio Projeto Lógico de Banco de Dados
                  </span>
                </div>
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>
    </div>
  );
}
