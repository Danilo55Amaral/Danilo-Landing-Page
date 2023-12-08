import Image from "next/image";
import Banner from "./components/banner";

export default function Home() {
  return (
    <>
      <Banner src="/image-background.png" alt="Imagem de Fundo" />
      <div className="flex items-center h-full justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full z-10 absolute">
          <p className="text-white font-semibold text-justify lg:w-1/3 w-full">
            Seja bem-vindo ao meu portfólio, conheça alguns dos meus trabalhos
            como freelancer e também alguns projetos que construir, meu objetivo
            é transformar de forma positiva a vida das pessoas através da
            tecnologia.
          </p>
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
      </div>
    </>
  );
}
