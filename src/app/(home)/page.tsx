import Banner from "./components/banner";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Banner src="/image-background.png" alt="Imagem de Fundo" />
        <h1 className="text-white z-10 absolute justify-self-center">Ola mundo</h1>
      </div>
    </>
  );
}
