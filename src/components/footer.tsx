import Link from "next/link";
import { Separator } from "./ui/separator";
import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full h-auto mt-20">
      <div className=" flex justify-evenly w-full mt-6 mb-6 ">
        <Link href="#" aria-label="Link para seção de inicial do site">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/75812281?v=4"
              alt="Avatar"
            />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex flex-col gap-3 text-white font-semibold">
          <Link href="#" aria-label="Link para seção de Home do site">
            <span className="hover:text-blue-700">Home</span>
          </Link>
          <Link href="#" aria-label="Link para seção de Sobre do site">
            <span className="hover:text-blue-700">Sobre</span>
          </Link>
          <Link href="#" aria-label="Link para seção de Habilidades do site">
            <span className="hover:text-blue-700">Habilidades</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-white font-semibold">
          <Link href="#" aria-label="Link para seção de Portfolio do site">
            <span className="hover:text-blue-700">Portfolio</span>
          </Link>
          <Link href="#" aria-label="Link para seção de Certificados do site">
            <span className="hover:text-blue-700">Certificados</span>
          </Link>
        </div>
      </div>

      <Separator className="w-11/12" />

      <div className="flex gap-3 mt-14 text-white">
        <Link href="https://www.instagram.com/danilo_kairois" aria-label="link para Instagram">
          <InstagramLogo
            size={26}
            weight="fill"
            className="hover:text-blue-700"
          />
        </Link>
        <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1" aria-label="link para contato direto pelo WhatsApp">
          <WhatsappLogo
            size={26}
            weight="fill"
            className="hover:text-blue-700"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/danilo-gabriel-amaral-ferreira-305457195/" aria-label="link para o Linkedin">
          <LinkedinLogo
            size={26}
            weight="fill"
            className="hover:text-blue-700"
          />
        </Link>
        <Link href="https://github.com/Danilo55Amaral" aria-label="link para o GitHub">
          <GithubLogo
            size={26}
            weight="fill"
            className="hover:text-blue-700"
          />
        </Link>
      </div>

      <div className="text-white px-8 py-4 text-[0.625rem]">
        © 2024 Copyright{" "}
        <span className="font-semibold text-blue-700 pl-1">
          Danilo Amaral
        </span>
      </div>
    </div>
  );
}
