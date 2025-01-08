import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold text-center mx-auto mb-4">
        Perguntas Frequentes <span className="text-blue-700">(FAQ)</span>
      </h1>
      <div id="faq" className="flex justify-center w-full mt-10 px-5 lg:px-0">
        <div className="text-blue-700 items-center w-[600px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  O que Danilo Amaral oferece?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Consultorias em tecnologia, desenvolvimento de sites,
                  plataformas web e serviços personalizados.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  Quais são as suas áreas de especialização?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Desenvolvimento web, Computação em nuvem, Front End, Back End,
                  Ciência de Dados.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  Quais tipos de projetos você desenvolve?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Sites de portfólio, plataformas web, e-commerce, sistemas de
                  CRM, soluções personalizadas e soluções em TI.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  Você oferece suporte técnico em seus projetos?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Sim, oferecemos suporte técnico personalizado e humanizado.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  Quais tecnologias você utiliza?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Node.js, React, NextJs, TypeScript, Python, banco de dados,
                  Docker, e outras tecnologias modernas.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <h3 className="px-2 text-white font-bold">
                  Você utiliza metodologias ágeis?
                </h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="px-2 text-white">
                  Sim, trabalhamos com metodologias ágeis, como SCRUM e KANBAN.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
